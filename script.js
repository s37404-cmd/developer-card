const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");
let clickCount = 0;

factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe! + " + clickCount;
  clickCount = clickCount + 1;
});