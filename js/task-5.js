function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnEl = document.querySelector(".change-color");
const spunEl = document.querySelector(".color");
const body = document.querySelector("body");

btnEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spunEl.textContent = color;
});
