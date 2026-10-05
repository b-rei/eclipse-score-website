(() => {
  const search = document.querySelector("[data-faq-search]");
  const categories = [...document.querySelectorAll("[data-faq-category]")];
  const result = document.querySelector("[data-faq-results]");
  const empty = document.querySelector("[data-faq-empty]");
  if (!search || !categories.length || !result || !empty) return;

  const questions = categories.flatMap(category => [...category.querySelectorAll("[data-faq-item]")]);
  const update = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visibleCount = 0;

    categories.forEach(category => {
      let categoryCount = 0;
      category.querySelectorAll("[data-faq-item]").forEach(item => {
        const matches = !query || item.textContent.toLocaleLowerCase().includes(query);
        item.hidden = !matches;
        if (matches) {
          categoryCount += 1;
          visibleCount += 1;
        }
      });
      category.hidden = categoryCount === 0;
      category.querySelector("[data-faq-count]").textContent = String(categoryCount);
      const categoryLink = document.querySelector(`.faq-category-nav a[href="#${category.id}"]`);
      if (categoryLink) categoryLink.hidden = categoryCount === 0;
    });

    result.textContent = `${visibleCount} ${visibleCount === 1 ? "question" : "questions"}`;
    empty.hidden = visibleCount !== 0;
  };

  search.addEventListener("input", update);
  update();
})();