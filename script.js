const scrollBtn = document.getElementById("scroll-btn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        scrollBtn.classList.add("scroll-btn-active");
    }
    else {
        scrollBtn.classList.remove("scroll-btn-active");
    }
})

scrollBtn.addEventListener("click", () => {
    if (scrollBtn.classList.contains("scroll-btn-active")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

const filterButtons = document.querySelectorAll(".menu-button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");

    cards.forEach(card => {
        const column = card.parentElement;
      if (category === "all" || card.dataset.category === category) {
        column.style.display = "block"; // show col
      } else {
        column.style.display = "none";  // hide col
      }
    });
  });
});
