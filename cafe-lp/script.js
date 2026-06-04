document.getElementById("scrollBtn").addEventListener("click", () => {
  document.querySelector(".menu").scrollIntoView({
    behavior: "smooth"
  });
});

// フェードイン
const sections = document.querySelectorAll("section");

function showSections() {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
}

showSections();
window.addEventListener("scroll", showSections);