const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");
const joinBtn = document.getElementById("join-club");




navToggle.addEventListener("click", (e) => {
  primaryNavigation.toggleAttribute("data-visible");
});
