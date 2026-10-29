(() => {
  const leadLists = document.querySelectorAll("[data-project-leads]");
  if (!leadLists.length) return;

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 10000);

  fetch(leadLists[0].dataset.api, {
    headers: { Accept: "application/json" },
    signal: controller.signal,
  })
    .then((response) => {
      if (!response.ok) throw new Error(`Project API returned ${response.status}`);
      return response.json();
    })
    .then((payload) => {
      const project = Array.isArray(payload) ? payload[0] : payload;
      leadLists.forEach((leadList) => {
        const status = leadList.parentElement.querySelector("[data-leads-status]");
        const usernames = leadList.dataset.memberUsernames?.split(",");
        const committers = Array.isArray(project?.committers) ? project.committers : [];
        const contributors = Array.isArray(project?.contributors) ? project.contributors : [];
        const candidates = usernames ? [...committers, ...contributors] : project?.project_leads;
        const validLeads = Array.isArray(candidates) ? candidates.filter((lead) =>
          typeof lead.full_name === "string" && lead.full_name.trim() &&
          typeof lead.username === "string" && lead.username.trim()) : [];
        const leads = usernames
          ? usernames.map((username) => validLeads.find((lead) => lead.username === username)).filter(Boolean)
          : validLeads;
        if (!leads.length) {
          leadList.dataset.state = "unavailable";
          status.textContent = "Circle members could not be loaded from the Eclipse project directory.";
          return;
        }

        const fragment = document.createDocumentFragment();
        leads.forEach((lead) => {
          const username = encodeURIComponent(lead.username);
          const item = document.createElement("li");
          const link = document.createElement("a");
          const role = usernames ? "CM" : "PL";
          const isContributor = usernames && !committers.some((committer) => committer.username === lead.username);
          link.href = isContributor
            ? `https://accounts.eclipse.org/users/${username}`
            : `https://projects.eclipse.org/projects/automotive.score/${role}/${username}`;
          link.target = "_blank";
          link.rel = "noopener noreferrer";

          const image = document.createElement("img");
          image.src = `https://accounts.eclipse.org/user/${username}/picture`;
          image.alt = "";
          image.width = 44;
          image.height = 44;
          image.loading = "lazy";
          image.addEventListener("error", () => { image.hidden = true; }, { once: true });

          const name = document.createElement("span");
          name.textContent = lead.full_name;
          link.append(image, name);
          item.append(link);
          fragment.append(item);
        });
        fragment.append(...leadList.querySelectorAll("[data-manual-member]"));
        leadList.replaceChildren(fragment);
        const missing = usernames?.filter((username) => !leads.some((lead) => lead.username === username)) || [];
        leadList.dataset.state = missing.length ? "partial" : "loaded";
        status.textContent = missing.length
          ? `Not found in the Eclipse committer or contributor lists: ${missing.join(", ")}.`
          : "";
      });
    })
    .catch(() => {
      leadLists.forEach((leadList) => {
        leadList.dataset.state = "unavailable";
        leadList.parentElement.querySelector("[data-leads-status]").textContent =
          "Circle members could not be loaded from the Eclipse project directory.";
      });
    })
    .finally(() => window.clearTimeout(timer));
})();