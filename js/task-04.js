const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector("#value");

let counterValue = 0;

const handleDecrement = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};
const handleIncrement = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

decrementEl.addEventListener("click", handleDecrement);
incrementEl.addEventListener("click", handleIncrement);
