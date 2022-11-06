document.addEventListener("DOMContentLoaded", () => {
  preventDrag();
  const hideMenuButton = document.getElementById("hideMenu");
  const showMenuButton = document.getElementById("showMenu");
  if (hideMenuButton !== null) {
    hideMenuButton.addEventListener("click", hideMenu);
  }
  if (showMenuButton !== null) {
    showMenuButton.addEventListener("click", showMenu);
  }
});
