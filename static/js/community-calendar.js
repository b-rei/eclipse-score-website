(() => {
  const button = document.querySelector("[data-calendar-load]");
  const frameContainer = document.querySelector("[data-calendar-frame]");
  if (!button || !frameContainer) return;

  const loadLabel = button.textContent;

  button.addEventListener("click", () => {
    const frame = frameContainer.querySelector("iframe");
    if (frame) {
      frameContainer.replaceChildren();
      button.textContent = loadLabel;
      button.setAttribute("aria-expanded", "false");
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.src = button.dataset.embedUrl;
    iframe.title = button.dataset.title;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer";
    frameContainer.replaceChildren(iframe);
    button.textContent = "Remove embedded calendar";
    button.setAttribute("aria-expanded", "true");
  });
})();