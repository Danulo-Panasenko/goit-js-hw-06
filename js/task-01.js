const ulEl = document.querySelectorAll(".item");
console.log(`Number of categories:${ulEl.length}`);
ulEl.forEach((item) => {
  console.log(`Category:${item.firstElementChild.textContent}`);
  const listEl = item.lastElementChild;
  console.log(`Elements:${listEl.children.length}`);
});
