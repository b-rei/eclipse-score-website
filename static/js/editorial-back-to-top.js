(() => {
  const cards = document.querySelectorAll(".editorial-content .main-blog-item-card");

  cards.forEach(card => {
    if (card.querySelector(".editorial-back-to-top")) return;

    const link = document.createElement("a");
    link.className = "editorial-back-to-top";
    link.href = "#page-top";
    link.innerHTML = 'Back to top <span aria-hidden="true">↑</span>';
    card.append(link);
  });
})();