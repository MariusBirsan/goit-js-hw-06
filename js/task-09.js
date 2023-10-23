
const btn = document.querySelector("button");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", changeStyle);

function changeStyle() {
  const backgroundColor = document.querySelector(".widget");
  backgroundColor.style.backgroundColor = getRandomHexColor();
}

