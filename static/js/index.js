document.addEventListener("DOMContentLoaded", () => {
  /**
   * Se agregan eventos a los botones que controlan el despliegue del menu
   * en dispositivos pequeños.
   */
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
