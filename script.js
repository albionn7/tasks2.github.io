document.addEventListener("DOMContentLoaded", function () {
    const slideButton = document.getElementById("slideButton");
    const slider = document.querySelector(".slider");

    slideButton.addEventListener("click", function () {
      slider.classList.toggle("active");
    });
  });