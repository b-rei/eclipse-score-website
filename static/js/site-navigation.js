(() => {
  const toggle = document.querySelector(".score-nav-toggle");
  const nav = document.querySelector("#main-navigation");
  if (!toggle || !nav || !window.matchMedia) return;

  const mobile = window.matchMedia("(max-width: 980px)");
  const setOpen = open => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close menu" : "Menu";
    nav.hidden = mobile.matches && !open;
  };

  const syncViewport = () => {
    toggle.hidden = !mobile.matches;
    if (!mobile.matches) {
      setOpen(false);
      return;
    }
    if (toggle.getAttribute("aria-expanded") !== "true") setOpen(false);
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", event => {
    if (mobile.matches && event.target instanceof Element && event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && mobile.matches && !nav.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });

  if (mobile.addEventListener) mobile.addEventListener("change", syncViewport);
  else mobile.addListener(syncViewport);
  syncViewport();
})();
