const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingContainer = document.querySelector(".container.rating");
const resultContainer = document.querySelector(".container.thanks");
const ratingResultText = document.getElementById("selected-rating");

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    ratingBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

submitBtn.addEventListener("click", function () {
  let activeRating = document.querySelector(".rating-btn.active");
  let ratingValue = activeRating.textContent;

  if (activeRating) {
    resultContainer.classList.remove("hide");
    ratingContainer.classList.add("hide");
    ratingResultText.textContent = ratingValue;
  } else {
    return;
  }
});
