const menu = document.querySelector("#menu");
const navMenu = document.querySelector(".nav-ul");

menu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
