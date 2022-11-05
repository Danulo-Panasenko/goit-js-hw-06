//const inputEl = document.querySelector("#validation-input");
//const requiredLength = Number(inputEl.getAttribute("data-length"));

//inputEl.addEventListener("blur", () => {
//  if (inputEl.value.length === requiredLength) {
//    inputEl.classList.add("valid");
// } else {
//   inputEl.classList.add("invalid");
// }
//});

const inputEl = document.querySelector("#validation-input");
const requiredLength = Number(inputEl.getAttribute("data-length"));

const inputBorder = () => {
  if (inputEl.value.length === requiredLength) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", inputBorder);
