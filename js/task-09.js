const body = document.body;
const btnEl = body.querySelector(".change-color");
const spanEl = body.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function output(event) {
  body.style.background = getRandomHexColor();
  spanEl.textContent = body.style.background;
}

body.addEventListener("click", output);
