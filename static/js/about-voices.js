(() => {
  const carousel = document.querySelector("[data-about-carousel]");
  if (!carousel) return;

  const viewport = carousel.querySelector("[data-voice-viewport]");
  const cards = [...carousel.querySelectorAll(".about-voice-card")];
  const previous = carousel.querySelector("[data-voice-prev]");
  const next = carousel.querySelector("[data-voice-next]");
  const toggle = carousel.querySelector("[data-voice-toggle]");
  const position = carousel.querySelector("[data-voice-position]");
  if (!viewport || !cards.length || !previous || !next || !toggle || !position) return;

  const getStep = () => {
    if (cards.length < 2) return cards[0].getBoundingClientRect().width;
    return cards[1].offsetLeft - cards[0].offsetLeft || cards[0].getBoundingClientRect().width;
  };

  const getMaximum = () => Math.max(0, viewport.scrollWidth - viewport.clientWidth);
  const getPageCount = () => {
    const maximum = getMaximum();
    return maximum <= 2 ? 1 : Math.ceil(maximum / getStep()) + 1;
  };

  const update = () => {
    const maximum = getMaximum();
    const pageCount = getPageCount();
    const current = Math.min(Math.round(viewport.scrollLeft / getStep()) + 1, pageCount);
    previous.disabled = viewport.scrollLeft <= 2;
    next.disabled = viewport.scrollLeft >= maximum - 2;
    position.textContent = `${current} / ${pageCount}`;
  };

  previous.addEventListener("click", () => {
    viewport.scrollBy({ left: -getStep(), behavior: "smooth" });
  });
  next.addEventListener("click", () => {
    viewport.scrollBy({ left: getStep(), behavior: "smooth" });
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let userPaused = reduceMotion.matches;
  let hovered = false;
  let focused = false;
  let rotationTimer;

  const canRotate = () => getPageCount() > 1 && !userPaused && !hovered && !focused && !document.hidden;

  const updateToggle = () => {
    toggle.setAttribute("aria-pressed", String(userPaused));
    toggle.setAttribute("aria-label", userPaused ? "Resume automatic rotation" : "Pause automatic rotation");
    toggle.textContent = userPaused ? "▶" : "Ⅱ";
  };

  const scheduleRotation = () => {
    window.clearTimeout(rotationTimer);
    if (!canRotate()) return;

    rotationTimer = window.setTimeout(() => {
      if (next.disabled) {
        viewport.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        viewport.scrollBy({ left: getStep(), behavior: "smooth" });
      }
      scheduleRotation();
    }, 3000);
  };

  toggle.addEventListener("click", () => {
    userPaused = !userPaused;
    updateToggle();
    scheduleRotation();
  });

  carousel.addEventListener("mouseenter", () => {
    hovered = true;
    scheduleRotation();
  });
  carousel.addEventListener("mouseleave", () => {
    hovered = false;
    scheduleRotation();
  });
  carousel.addEventListener("focusin", () => {
    focused = true;
    scheduleRotation();
  });
  carousel.addEventListener("focusout", () => {
    window.setTimeout(() => {
      focused = carousel.contains(document.activeElement);
      scheduleRotation();
    }, 0);
  });
  viewport.addEventListener("touchstart", () => {
    window.clearTimeout(rotationTimer);
    rotationTimer = window.setTimeout(scheduleRotation, 8000);
  }, { passive: true });
  document.addEventListener("visibilitychange", scheduleRotation);
  const handleMotionChange = event => {
    if (event.matches) {
      userPaused = true;
      updateToggle();
    }
    scheduleRotation();
  };
  if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", handleMotionChange);
  else reduceMotion.addListener(handleMotionChange);

  viewport.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", () => {
    update();
    scheduleRotation();
  });
  if ("ResizeObserver" in window) new ResizeObserver(update).observe(viewport);
  updateToggle();
  update();
  scheduleRotation();
})();
