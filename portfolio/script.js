document.addEventListener("DOMContentLoaded", () => {

  const scrollBtn = document.getElementById("scrollBtn");

  scrollBtn?.addEventListener("click", () => {
    document.querySelector(".works").scrollIntoView({
      behavior: "smooth"
    });
  });

  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => observer.observe(card));

});