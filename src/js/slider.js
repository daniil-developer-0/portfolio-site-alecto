// Slider

// === Variables ===
const sliders = Array.from(document.querySelectorAll(".slider"));

// === Sliders ===
sliders.forEach((item) => {
  addBreadcrumbs(); // Adding Breadcrumbs to the container
  // === Variables ===
  const leftArrow = item.querySelector(".slider__arrow_left"),
    rightArrow = item.querySelector(".slider__arrow_right"),
    slides = item.querySelectorAll(".slider__slide"),
    breadcrumbs = item.querySelectorAll(".slider__breadcrumb");

  // === Functions ===
  /**
   * @brief Detect current slide in DOM
   * @return index of current slide in DOM
   */
  const detectActiveSlide = () => {
    let index;
    slides.forEach((slide, i) => {
      if (slide.classList.contains("active")) {
        index = i;
      }
    });
    return index;
  };
  let currentSlide = detectActiveSlide();
  function addBreadcrumbs() {
    const slides = item.querySelectorAll(".slider__slide");
    const breadcrumbsContainer = item.querySelector(".slider__breadcrumbs");
    let breadcrumbs = [...slides].map((slide) => {
      let element = document.createElement("span");
      element.classList.add("slider__breadcrumb");
      if (slide.classList.contains("active")) {
        element.classList.add(["active"]);
      }
      return element;
    });

    breadcrumbs.forEach((breadcrumb) => {
      breadcrumbsContainer.appendChild(breadcrumb);
    });
  }
  function showPreviousSlide(event) {
    if (event?.target) {
      // Remove "active" class from current slide
      slides[currentSlide].classList.remove("active");
      // Remove "active" class from current breadcrumb
      breadcrumbs[currentSlide--].classList.remove("active");

      if (activeSlide < 0) {
        currentSlide = slides.length - 1;
      }

      // Add "active" class to the previous slide
      slides[currentSlide].classList.add("active");
      // Add "active" class to the breadcrumb
      breadcrumbs[currentSlide].classList.add("active");
    }
  }
  function showNextSlide(event) {
    if (event?.target) {
      // Remove "active" class from current slide
      slides[currentSlide].classList.remove("active");
      // Remove "active" class from current breadcrumb
      breadcrumbs[currentSlide++].classList.remove("active");

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      // Add "active" class to the previous slide
      slides[currentSlide].classList.add("active");
      // Add "active" class to the breadcrumb
      breadcrumbs[currentSlide].classList.add("active");
    }
  }

  // === Events ===
  leftArrow.addEventListener("click", showPreviousSlide);
  rightArrow.addEventListener("click", showNextSlide);
});
