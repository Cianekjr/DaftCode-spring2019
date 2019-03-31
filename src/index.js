import "./styles/main.scss";

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".card__nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
