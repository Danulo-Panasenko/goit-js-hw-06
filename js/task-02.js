const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const storageEll = [];
const ulEl = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  storageEll.push(liEl);
}
ulEl.append(...storageEll);
