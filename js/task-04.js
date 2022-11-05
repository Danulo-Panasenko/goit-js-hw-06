const refs = {
  value: document.querySelector("#value"),
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
};
let counterValue = 0;
const handleDecrement = () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
};
const handleIncrement = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
};
refs.decrement.addEventListener("click", handleDecrement);
refs.increment.addEventListener("click", handleIncrement);
