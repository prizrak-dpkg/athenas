document.addEventListener("DOMContentLoaded", () => {
  const athenasCarousel = document.getElementById("athenasCarousel");
  if (athenasCarousel != null) {
    athenasCarousel.addEventListener("slide.bs.carousel", detectSlideChange);
  }
});
