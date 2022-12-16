const hamburgerEl = document.querySelector(".hamburger"),
  navMenuEl = document.querySelector(".nav-menu"),
  navOverlayEl = document.querySelector(".nav-overlay");
hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("active"),
    navMenuEl.classList.toggle("active"),
    navOverlayEl.classList.toggle("active");
}),
  document.querySelectorAll(".nav-link").forEach((e) => {
    e.addEventListener("click", () => {
      hamburgerEl.classList.remove("active"),
        navMenuEl.classList.remove("active"),
        navOverlayEl.classList.remove("active");
    });
  });
