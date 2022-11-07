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
 * @async
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
 * @async
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
 * {@link https://getbootstrap.com/docs/5.2/components/carousel/#events})** La
 * finalidad es capturar la diapositiva que se encuentra activa en el momento y
 * mostrar la información correspondiente.
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

/**
 * Función flecha que recibe como parámetro un dato de tipo **string** y lo devuelve
 * sin espacios extra.
 * @param {string} text
 * @returns {string}
 * Devuelve la cadena sin espacios extra, es decir, elimina los
 * espacios extremos e intermedios de más.
 */
const withoutExtraSpaces = (text) => {
  const spaceRegex = /[\s]+/gi;
  return text.trim().replace(spaceRegex, " ");
};

/**
 * Función que recibe una cadena y devuelve en un objeto de tipo **HTMLElement**,
 * se puede resaltar texto enviándolo entre un asterisco y un guion de esta
 * manera: \*-texto-\*
 * @param {string} message
 * @returns {HTMLParagraphElement}
 * Retorna un objeto de tipo **HTMLElement** con la cadena enviada.
 * @example <caption>Ejemplo de uso:</caption>
 * getMessageInHtml("Esto es un *-Ejemplo-*.") =>
 * <p class="main-content__text imc-card__info--result">
 * Esto es un <span class="main-content__text--bold">Ejemplo</span>.
 * </p>
 */
const getMessageInHtml = (message) => {
  let content = "";
  const messageWithoutExtraSpaces = withoutExtraSpaces(message);
  content += messageWithoutExtraSpaces.replace(
    /(\*-)/g,
    `<span class="main-content__text--bold">`
  );
  content = content.replace(/(-\*)/g, "</span>");
  const paragraph = document.createElement("p");
  paragraph.classList.add("main-content__text", "imc-card__info--result");
  paragraph.innerHTML = content;
  return paragraph;
};

/**
 * Función flecha que recibe el índice que corresponde a la categoría IMC y
 * cambia el color de la tarjeta según corresponda.
 * @param {HTMLElement} cardContainer
 * @param {number} indexCard
 */
const changeColorImcCard = (cardContainer, indexCard) => {
  cardContainer.classList.remove(
    "imc-card--underweight",
    "imc-card--healthy-weight",
    "imc-card--overweight",
    "imc-card--obesity"
  );
  switch (indexCard) {
    case 1:
      cardContainer.classList.add("imc-card--underweight");
      break;
    case 2:
      cardContainer.classList.add("imc-card--healthy-weight");
      break;
    case 3:
      cardContainer.classList.add("imc-card--overweight");
      break;
    case 4:
      cardContainer.classList.add("imc-card--obesity");
      break;
    default:
      break;
  }
};

/**
 * Función flecha que recibe un dato de tipo **number** entre 0 y 4 que representa
 * el índice de la tarjeta correspondiente a cada categoría, tenemos 0 para
 * **General**, 1 para **Peso inferior al normal**, 2 para **Peso saludable**, 3 para
 * **Sobrepeso** y 4 para **Obesidad**.
 * @param {number} indexCard
 */
const showImcCard = (indexCard) => {
  const imcImages = document.querySelectorAll(".imc-card__image-item");
  const imcCard = document.querySelector(".imc-card");
  if (
    imcCard !== null &&
    imcImages.length === 5 &&
    indexCard >= 0 &&
    indexCard < 5
  ) {
    for (let index = 0; index < imcImages.length; index++) {
      const element = imcImages[index];
      if (index === indexCard) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
    changeColorImcCard(imcCard, indexCard);
  }
};

/**
 * Función flecha que valida la categoría a la que pertenece una persona según su
 * IMC.
 * @param {number} imc
 * @returns {[string, number]}
 * Retorna la categoría según el valor de IMC y el índice correspondiente de la
 * tarjeta que la representa, tenemos que para un valor por debajo de 18.5
 * corresponde a **Peso inferior al normal**, un valor entre 18.5 y 24.9 corresponde
 * a **Peso saludable**, un valor entre 25 y 29.9 corresponde a **Sobrepeso** y un valor
 * por encima de 30 corresponde a **Obesidad**.
 */
const getImcCategory = (imc) => {
  if (imc < 18.5) {
    return ["Peso inferior al normal", 1];
  } else if (imc < 25) {
    return ["Peso saludable", 2];
  } else if (imc < 30) {
    return ["Sobrepeso", 3];
  } else {
    return ["Obesidad", 4];
  }
};

const calculateImc = (height, weight) => {
  const imc = weight / height ** 2;
  const [category, indexCard] = getImcCategory(imc);
  showImcCard(indexCard);
  const message = `Su IMC es *-${imc.toFixed(2)}-*,
  lo que indica que su peso esta en la categoría de
  *-${category}-* para adultos de su estatura.`;
  return [imc.toFixed(2), message];
};

/**
 * Función flecha que válida que los datos necesarios para calcular el IMC estén
 * dentro de rangos coherentes, se tiene como **estatura mínima 0.5**, **estatura
 * máxima 2.8**, **peso mínimo 10** y **peso máximo 500**.
 * @param {number | null} height
 * @param {number | null} weight
 * @returns {[string, string]}
 * Retorna un array de dos (2) elementos, el primero de tipo **string** que contiene
 * el valor del IMC y el segundo de tipo **string** que contiene el resultado para
 * presentar al usuario.
 */
const validateDataRangeNeededToImc = (height, weight) => {
  if (height < 0.5) {
    const message = `Por favor verifique la exactitud de la información que ha introducido.
    La estatura más baja registrada perteneció a *-Chandra Bahadur Dangi-*, un nepalí de 54.6
    centímetros de estatura. Recuerde que esta calculadora es para adultos de 20 años o más.`;
    showImcCard(0);
    return ["-", message];
  } else if (height > 2.8) {
    const message = `Por favor verifique la exactitud de la información que ha introducido.
    La estatura más alta registrada perteneció a *-Robert Wadlow-*, un estadounidense de 2.72
    metros de estatura.`;
    showImcCard(0);
    return ["-", message];
  } else if (weight < 10) {
    const message = `Por favor verifique la exactitud de la información que ha introducido.
    Una de las personas más livianas es *-Lizzie Velasquez-*, una estadounidense que registro un
    peso de 27kg a sus 21 años de edad. Recuerde que esta calculadora es para adultos de 20 años o más.`;
    showImcCard(0);
    return ["-", message];
  } else if (weight > 500) {
    const message = `Por favor verifique la exactitud de la información que ha introducido.
    El hombre más pesado del que se tienen datos fue *-Jon Brower Minnoch-*, un estadounidense
    que alcanzo los 635kg de peso.`;
    showImcCard(0);
    return ["-", message];
  } else {
    return calculateImc(height, weight);
  }
};

/**
 * Función flecha que válida que los datos necesarios para calcular el IMC no sean
 * de tipo **null**.
 * @param {number | null} height
 * @param {number | null} weight
 * @param {HTMLElement} heightElement
 * @param {HTMLElement} weightElement
 * @returns {[string, string]}
 * Retorna un array de dos (2) elementos, el primero de tipo **string** que contiene
 * el valor del IMC y el segundo de tipo **string** que contiene el resultado para
 * presentar al usuario.
 */
const validateDataNeededToImc = (
  height,
  weight,
  heightElement,
  weightElement
) => {
  if (height === null) {
    const message = `Por favor verifique la exactitud de la información que ha introducido,
    necesitamos la *-Estatura (Metros)-* para calcular tu IMC, recuerde que
    debe usar el *-punto (.)-* como separador decimal.`;
    showImcCard(0);
    return ["-", message];
  } else if (weight === null) {
    const message = `Por favor verifique la exactitud de la información que ha introducido,
    necesitamos el *-Peso (Kilogramos)-* para calcular tu IMC, recuerde que
    debe usar el *-punto (.)-* como separador decimal.`;
    showImcCard(0);
    return ["-", message];
  } else {
    heightElement.value = height;
    weightElement.value = weight;
    return validateDataRangeNeededToImc(height, weight);
  }
};

/**
 * Función flecha que recibe una variable de tipo **string** como parámetro y
 * devuelve el texto convertido a un dato de tipo **number** si corresponde a un
 * número válido, si el número presenta exceso de puntos decimales devuelve los
 * dos primeros tramos, de lo contrario devuelve **null**.
 * @param {string} text
 * @returns {number | null}
 * Retorna dato de tipo **number** o **null** según el parámetro de entrada.
 * @example <caption>Ejemplo de uso:</caption>
 * checkNumber("") => Salida(null).
 * checkNumber("Example") => Salida(null).
 * checkNumber("15.15646.654") => Salida(15.15646).
 * checkNumber("3.1416") => Salida(3.1416)
 * checkNumber("3") => Salida(3)
 */
const checkNumber = (text) => {
  const numberRegex = /^[\d.]+$/;
  const match = numberRegex.test(text);
  if (match) {
    const numberSplit = text.split(".");
    if (numberSplit.length > 1) {
      return parseFloat(`${numberSplit[0]}.${numberSplit[1]}`);
    } else {
      return parseFloat(numberSplit[0]);
    }
  }
  return null;
};

/**
 * Función flecha que intercepta el envío del formulario con los datos necesarios
 * para calcular el IMC. Ejecuta validaciones y devuelve objeto con el resultado.
 * @param {Event} event
 * @returns {{ imc: string, message: HTMLParagraphElement }}
 * El objeto contiene el valor del IMC de tipo **string** y un objeto de
 * tipo **HTMLElement** con el resultado.
 */
const getImc = (event) => {
  event.preventDefault();
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  if (height !== null && weight !== null) {
    const heightValue = checkNumber(height.value);
    const weightValue = checkNumber(weight.value);
    const [imc, message] = validateDataNeededToImc(
      heightValue,
      weightValue,
      height,
      weight
    );
    return { imc, message: getMessageInHtml(message) };
  }
  return {
    IMC: "-",
    message: document.createElement("p"),
  };
};
