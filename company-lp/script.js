// CTAスクロール
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.querySelector(".cta").scrollIntoView({
    behavior: "smooth"
  });
});

// フェードイン
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});