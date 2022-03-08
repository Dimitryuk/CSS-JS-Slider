const board = document.querySelector("#board");
const colors = [
  "#9292e0",
  "#424296",
  "#0d0d50",
  "#b442a1",
  "#83537b",
  "#4e0642",
  "#c79fc0",
  "#75a1e2",
  "#265192",
];

const SQUARES_NUMBER = 800;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "rgb(50, 59, 54)";
  element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
