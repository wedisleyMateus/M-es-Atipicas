const hamburgue = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburgue.addEventListener("click", () => nav.classList.toggle("active"));