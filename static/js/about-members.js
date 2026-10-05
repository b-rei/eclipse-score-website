(() => {
  const memberList = document.querySelector("[data-eclipse-members]");
  if (!memberList) return;

  const status = document.querySelector("[data-member-status]");
  const apiUrl = memberList.dataset.api;
  const timeout = new AbortController();
  const timer = window.setTimeout(() => timeout.abort(), 10000);

  const getOrganizations = (payload) => {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.organizations)) return payload.organizations;
    if (Array.isArray(payload?.relations)) {
      return payload.relations.map((relation) => relation.organization || relation);
    }
    return [];
  };

  fetch(apiUrl, { headers: { Accept: "application/json" }, signal: timeout.signal })
    .then((response) => {
      if (!response.ok) throw new Error(`Membership API returned ${response.status}`);
      return response.json();
    })
    .then((payload) => {
      const names = [...new Set(getOrganizations(payload)
        .map((organization) => organization?.name?.trim())
        .filter(Boolean))]
        .sort((first, second) => first.localeCompare(second));

      if (!names.length) throw new Error("Membership API returned no organizations");

      const fragment = document.createDocumentFragment();
      names.forEach((name) => {
        const item = document.createElement("li");
        item.textContent = name;
        fragment.append(item);
      });
      memberList.replaceChildren(fragment);
      memberList.dataset.state = "loaded";
      status.textContent = `${names.length} participating organizations`;
    })
    .catch(() => {
      memberList.dataset.state = "unavailable";
      status.textContent = memberList.dataset.error || "Member organizations are provided by the Eclipse Foundation.";
    })
    .finally(() => window.clearTimeout(timer));
})();