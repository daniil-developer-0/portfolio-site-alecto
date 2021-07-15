"use strict";

// === Variables ===
// Burger
const burger_menu = document.querySelector(".header__burger"),
  navigation_menu = document.querySelector(".header__menu");

// === Functions ===
function toggleBurger(event) {
  if (event?.target) {
    if (navigation_menu.style.display === 'none' || navigation_menu.style.display === '') {
      navigation_menu.style.display = "flex";
      burger_menu.classList.toggle("active");
    } else {
      navigation_menu.style.display = "none";
      burger_menu.classList.toggle("active");
    }
  }
}

// === Events ===
burger_menu.addEventListener("click", toggleBurger);
