(() => {
  const header = document.querySelector(".score-header");
  if (!header) return;

  const toggle = header.querySelector(".score-nav-toggle");
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const delta = y - lastY;
    header.classList.toggle("is-scrolled", y > 24);

    const pinned = y < header.offsetHeight
      || header.contains(document.activeElement)
      || toggle?.getAttribute("aria-expanded") === "true";
    if (pinned || delta < -6) header.classList.remove("is-hidden");
    else if (delta > 6) header.classList.add("is-hidden");

    // Ignore sub-threshold jitter so slow scrolling still accumulates to a direction change.
    if (Math.abs(delta) > 6 || pinned) lastY = y;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  header.addEventListener("focusin", () => header.classList.remove("is-hidden"));
  update();
})();

(() => {
  const toggle = document.querySelector(".score-nav-toggle");
  const nav = document.querySelector("#main-navigation");
  if (!toggle || !nav || !window.matchMedia) return;

  const mobile = window.matchMedia("(max-width: 980px)");
  const setOpen = open => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close menu" : "Menu";
  };

  const syncViewport = () => {
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
    if (event.key === "Escape" && mobile.matches && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  if (mobile.addEventListener) mobile.addEventListener("change", syncViewport);
  else mobile.addListener(syncViewport);
  syncViewport();
})();
