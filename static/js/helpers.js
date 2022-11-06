/**
 * Función flecha que obtiene los elementos del DOM que estén entre la etiqueta
 * **img** o **a** y evita que estos sean arrastrados por el usuario.
 */
const preventDrag = () => {
  Array.from(document.getElementsByTagName("img")).forEach((item) => {
    item.addEventListener("dragstart", (event) => event.preventDefault());
  });
  Array.from(document.getElementsByTagName("a")).forEach((item) => {
    item.addEventListener("dragstart", (event) => event.preventDefault());
  });
};

/**
 * Función flecha que obtiene los elementos del DOM que tengan la clase
 * **navigation__option** y les remueve la clase **navigation__option--show** en
 * intervalos de 50ms. Oculta el botón para cerrar el menú y muestra el botón
 * para abrirlo.
 * @param {Event} event
 */
const hideMenu = async (event) => {
  const hideButton = event.currentTarget;
  const showButton = hideButton.previousElementSibling;
  hideButton.disabled = true;
  const options = document.querySelectorAll(".navigation__option");
  for (let index = options.length - 1; index >= 0; index--) {
    await new Promise((resolve) =>
      setTimeout(() => {
        const element = options[index];
        element.style.transition = "none";
        resolve(element.classList.remove("navigation__option--show"));
      }, 50)
    );
  }
  if (showButton !== null) {
    showButton.disabled = false;
    hideButton.classList.add("d-none");
    showButton.classList.remove("d-none");
  }
};

/**
 * Función flecha que obtiene los elementos del DOM que tengan la clase
 * **navigation__option** y les agrega la clase **navigation__option--show** en
 * intervalos de 100ms. Oculta el botón para abrir el menú y muestra el botón
 * para cerrarlo.
 * @param {Event} event
 */
const showMenu = async (event) => {
  const showButton = event.currentTarget;
  const hideButton = showButton.nextElementSibling;
  showButton.disabled = true;
  const options = document.querySelectorAll(".navigation__option");
  for (let index = 0; index < options.length; index++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        const element = options[index];
        element.style.transition = "transform 0.5s";
        resolve(element.classList.add("navigation__option--show"));
      }, 100)
    );
  }
  if (hideButton !== null) {
    hideButton.disabled = false;
    hideButton.classList.remove("d-none");
    showButton.classList.add("d-none");
  }
};

/**
 * Función flecha que recibe como parámetro una variable de tipo **Event** que
 * contiene la información sobre el estado de las diapositivas. **(Documentación
 * sobre los eventos incorporados en el carrusel de Bootstrap:
 * https://getbootstrap.com/docs/5.2/components/carousel/#events)**
 * La finalidad es capturar la diapositiva que se encuentra activa en el momento
 * y mostrar la información correspondiente.
 * @param {Event} event
 */
const detectSlideChange = (event) => {
  const slide = event.to;
  const bannerTitle = document.querySelector(".banner__title");
  const containers = document.querySelectorAll(".main-content--container");
  const smallImages = document.querySelectorAll(".main-content__image");
  if (
    bannerTitle !== null &&
    containers.length === 3 &&
    smallImages.length === 3
  ) {
    switch (slide) {
      case 0:
        bannerTitle.innerText = "IMC";
        containers[slide].classList.remove("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        break;
      case 1:
        bannerTitle.innerText = "CRUD";
        containers[slide].classList.remove("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        break;
      case 2:
        bannerTitle.innerText = "JSON";
        containers[slide].classList.remove("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        break;
      default:
        break;
    }
  }
};
