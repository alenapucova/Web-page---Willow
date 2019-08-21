let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("singleService");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//Dropdown menu
const dropdownBtn = document.querySelector(".dropbtn");
const dropDownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", showMenu);

function showMenu(e) {
  e.preventDefault();
  if (dropDownContent.className === "dropdown-content") {
    dropDownContent.classList.add("expanded");
  } else {
    dropDownContent.className = "dropdown-content";
  }
}
