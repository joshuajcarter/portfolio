window.addEventListener("load", () => {
  ["#hero-make", "#hero-ideas", "#hero-happen"].forEach((id) => {
    document.querySelector(id).style.opacity = "1";
  });
});

const menuButton = document.getElementById("menu-button");
const closeMenu = document.getElementById("close-menu-button")
const workLink = document.getElementById('work-link')
const dropDown = document.getElementById('nav-dropdown')
const letsTalk = document.querySelectorAll('.talk')

function showMenu() {
  menuButton.classList.add("hide");
  closeMenu.classList.remove("hide");
  dropDown.classList.remove("hide");
}

function hideMenu() {
  closeMenu.classList.add("hide");
  menuButton.classList.remove("hide");
  dropDown.classList.add("hide");
}
menuButton.addEventListener('click', showMenu)
closeMenu.addEventListener('click', hideMenu)
workLink.addEventListener("click", hideMenu);

letsTalk.forEach((button) => {
  button.addEventListener("click", showMenu);
});