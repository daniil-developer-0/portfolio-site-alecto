"use strict";

// Slider
// Add Breadcrumbs to the slider
addBreadcrumbs();

// === Variables ===
const arrows = {
    left: document.querySelector(".slider__arrow_left"),
    right: document.querySelector(".slider__arrow_right"),
  },
  slides = document.querySelectorAll(".slider__slide"),
  breadcrumbs = document.querySelectorAll(".slider__breadcrumb"),
  container = document.querySelector(".hero__slider");

let activeSlide = findActiveSlide();
console.log(slides, breadcrumbs, activeSlide);

// Coordinates of touching on slider
let touchstart = 0; // X0
let touchend = 0; // X1 (D(X))

// === Events ===
arrows.left.addEventListener("click", showPreviousSlide);
arrows.right.addEventListener("click", showNextSlide);

container.addEventListener("touchstart", (event) => {
  touchstart = event.changedTouches[0].screenX;
});

container.addEventListener("touchend", (event) => {
  touchend = event.changedTouches[0].screenX;
});

container.addEventListener("touchend", swipeSlide);

// === Functions ===
// --- Arrow functions ---
function showPreviousSlide(event) {
  if (event?.target) {
    // Remove "active" class from current slide
    slides[activeSlide].classList.remove("active");
    // Remove "active" class from current breadcrumb
    breadcrumbs[activeSlide--].classList.remove("active");

    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }

    // Add "active" class to the previous slide
    slides[activeSlide].classList.add("active");
    // Add "active" class to the breadcrumb
    breadcrumbs[activeSlide].classList.add("active");
  }
}

function showNextSlide(event) {
  if (event?.target) {
    // Remove "active" class from current slide
    slides[activeSlide].classList.remove("active");
    // Remove "active" class from current breadcrumb
    breadcrumbs[activeSlide++].classList.remove("active");

    if (activeSlide >= slides.length) {
      activeSlide = 0;
    }

    // Add "active" class to the previous slide
    slides[activeSlide].classList.add("active");
    // Add "active" class to the breadcrumb
    breadcrumbs[activeSlide].classList.add("active");
  }
}

// Functions for swipe
function swipeSlide(event) {
  if (touchend < touchstart) {
    showNextSlide(event);
  } else if (touchend > touchstart) {
      showPreviousSlide(event);
  };
}

// --- Utility functions ---
function findActiveSlide() {
  let index;
  slides.forEach((item, ind) => {
    if (item.classList.contains("active")) {
      index = ind;
    }
  });
  return index;
}

function addBreadcrumbs() {
  const slides = document.querySelectorAll(".slider__slide");
  const breadcrumbsContainer = document.querySelector(".slider__breadcrumbs");
  let breadcrumbs = [...slides].map((item) => {
    let element = document.createElement("span");
    element.classList.add("slider__breadcrumb");
    if (item.classList.contains("active")) {
      element.classList.add(["active"]);
    }
    return element;
  });

  breadcrumbs.forEach((item) => {
    breadcrumbsContainer.appendChild(item);
  });
}
