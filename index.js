const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Menu icon event handler in mobile screen
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Hide navigation menu when a child is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll reveal animation basic configuration
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOptions,
  origin: "right",
});

ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});
