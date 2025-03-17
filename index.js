const feedbackRating = document.querySelectorAll(".feedback-rating");
const submitButton = document.getElementById("submit-button");
const cardFeedback = document.getElementById("card-feedback");
const cardRating = document.getElementById("card-rating");
const rating = document.getElementById("rating");
const backButton = document.getElementById("back-button");

let selectedRating = 0;

// mengelola tombol rating yang dipilih dan yang tidak
feedbackRating.forEach((button) => {
  button.addEventListener("click", () => {
    feedbackRating.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    // mengambil nilainya
    selectedRating = button.textContent;
  });
});

// dilanjutkan submit nilai tanpa fungsi callback (karena fungsi ingin langsung dieksekusi)
submitButton.addEventListener("click", () => {
  if (selectedRating > 0) {
    rating.textContent = selectedRating;
    cardRating.style.display = "none";
    cardFeedback.style.display = "flex";
  } else {
    alert("please select the rating");
  }
});

backButton.addEventListener("click", () => {
  cardRating.style.display = "flex";
  cardFeedback.style.display = "none";
});
