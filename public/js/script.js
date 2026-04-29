const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");

navToggle.addEventListener('click',(e) => {
  primaryNavigation.toggleAttribute("data-visible");
});
