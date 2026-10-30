// スクロール時に要素を表示する
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// ページ上部のスクロール進捗バー
const progressBar = document.querySelector(".scroll-progress");

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// 作品カテゴリの絞り込み
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const projectCount = document.querySelector("#project-count");

function filterProjects(category) {
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const shouldShow = category === "all" || card.dataset.category === category;
    card.hidden = !shouldShow;
    if (shouldShow) visibleCount++;
  });

  projectCount.textContent = String(visibleCount).padStart(2, "0");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    filterProjects(button.dataset.filter);
  });
});

// スマホ用ナビゲーション
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
    menuToggle.textContent = "☰";
  });
});
