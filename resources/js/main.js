window.addEventListener("load", () => {
  ["#hero-make", "#hero-ideas", "#hero-happen"].forEach((id) => {
    const element = document.querySelector(id);
    if (element) {
      element.style.opacity = "1";
    }
  });

  const menuButton = document.getElementById("menu-button");
  const closeMenu = document.getElementById("close-menu-button");
  const workLink = document.getElementById("work-link");
  const dropDown = document.getElementById("nav-dropdown");
  const letsTalk = document.querySelectorAll(".talk");

  console.log("menuButton:", menuButton);
  console.log("closeMenu:", closeMenu);
  console.log("workLink:", workLink);
  console.log("dropDown:", dropDown);
  console.log("letsTalk:", letsTalk);

  function showMenu() {
    if (menuButton) menuButton.classList.add("hide");
    if (closeMenu) closeMenu.classList.remove("hide");
    if (dropDown) dropDown.classList.remove("hide");
  }

  function hideMenu() {
    if (closeMenu) closeMenu.classList.add("hide");
    if (menuButton) menuButton.classList.remove("hide");
    if (dropDown) dropDown.classList.add("hide");
  }

  if (menuButton) menuButton.addEventListener("click", showMenu);
  if (closeMenu) closeMenu.addEventListener("click", hideMenu);
  if (workLink) workLink.addEventListener("click", hideMenu);

  letsTalk.forEach((button) => {
    button.addEventListener("click", showMenu);
  });
});
