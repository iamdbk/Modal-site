const modalContainer = document.querySelector(".modal-container");
const ctaButton = document.querySelector(".cta-btn");
const hamburger = document.querySelector(".fa-bars");
const navbar = document.querySelector("nav");

// Sign Up btn action
ctaButton.addEventListener("click", function () {
  modalContainer.classList.toggle("none");
});

// Making Modal to hide again
modalContainer.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("fa") ||
    e.target.classList.contains("modal-container") ||
    e.target.classList.contains("submit-btn")
  ) {
    modalContainer.classList.toggle("none");
  }
});

// Making navbar appear
hamburger.addEventListener("click", function () {
  navbar.classList.toggle("none");
});
