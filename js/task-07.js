const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const output = (event) => {
  spanEl.style.fontSize = String(event.currentTarget.value) + "px";
};
inputEl.addEventListener("input", output);
