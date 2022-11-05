const refs = {
  span: document.querySelector("#name-output"),
  input: document.querySelector("#name-input"),
};
refs.input.addEventListener("input", () => {
  refs.span.textContent = refs.input.value ? refs.input.value : "Anonymous";
});
