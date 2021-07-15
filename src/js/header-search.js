// === Variables ===
const searchIcon = document.querySelector(".search__icon"),
  searchWrapper = document.querySelector('.header__search'),
  searchForm = document.querySelector(".search__form");

// === Functions ===
function toggleSearch(event) {
  if (event?.target) {
    searchWrapper.classList.toggle("active");
    if (
      searchForm.style.display === "none" ||
      searchForm.style.display === ""
    ) {
      searchForm.style.display = "block";
    } else {
      searchForm.style.display = "none";
    }
  }
}

// === Events ===
searchIcon.addEventListener("click", toggleSearch);
