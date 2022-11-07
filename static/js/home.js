document.addEventListener("DOMContentLoaded", () => {
  /**
   * Se agrega evento al carrusel implementado con Bootstrap, la finalidad es saber
   * en que diapositiva nos encontramos para sincronizar el contenido a la misma.
   */
  const athenasCarousel = document.getElementById("athenasCarousel");
  if (athenasCarousel != null) {
    athenasCarousel.addEventListener("slide.bs.carousel", detectSlideChange);
  }
});
