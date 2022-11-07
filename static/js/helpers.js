/**
 * Número de resultados por página, empleado en el módulo CRUD.
 */
const userPerPage = 4;

/**
 * Objeto que simula una base de datos, empleado en el módulo CRUD.
 */
const objJson = [
  {
    _id: "6362e6b26f6277ba7ba69777",
    name: "Angeline Parrish",
    isActive: true,
    balance: "$3,880.63",
    age: 26,
    phone: "+1 (926) 431-3694",
    email: "angelineparrish@autograte.com",
  },
  {
    _id: "6362e6b2bca1ca1a5cd0b039",
    name: "Melanie Lynch",
    isActive: false,
    balance: "$3,768.79",
    age: 20,
    phone: "+1 (884) 443-2446",
    email: "melanielynch@autograte.com",
  },
  {
    _id: "6362e6b2d6d6c0ddf696d17d",
    name: "Augusta Molina",
    isActive: false,
    balance: "$1,549.52",
    age: 30,
    phone: "+1 (809) 437-2058",
    email: "augustamolina@autograte.com",
  },
  {
    _id: "6362e6b2ba2dac391e1ed831",
    name: "Jennie Roberts",
    isActive: false,
    balance: "$2,933.80",
    age: 20,
    phone: "+1 (926) 437-3060",
    email: "jennieroberts@autograte.com",
  },
  {
    _id: "6362e6b2612e872e9a96451e",
    name: "Lewis Bell",
    isActive: false,
    balance: "$2,235.54",
    age: 29,
    phone: "+1 (912) 489-2473",
    email: "lewisbell@autograte.com",
  },
  {
    _id: "6362e6b2710cbf7d2a7ae5ee",
    name: "Pansy Monroe",
    isActive: true,
    balance: "$2,971.44",
    age: 38,
    phone: "+1 (953) 429-3769",
    email: "pansymonroe@autograte.com",
  },
  {
    _id: "6362e6b266c5775990c9d23a",
    name: "Santos Fitzpatrick",
    isActive: true,
    balance: "$1,090.86",
    age: 25,
    phone: "+1 (961) 445-2409",
    email: "santosfitzpatrick@autograte.com",
  },
  {
    _id: "6362e6b2da97ec502a07c7d2",
    name: "Terry Pace",
    isActive: false,
    balance: "$1,938.40",
    age: 29,
    phone: "+1 (850) 489-3795",
    email: "terrypace@autograte.com",
  },
  {
    _id: "6362e6b20e1b72c76d8d8e07",
    name: "Humphrey Villarreal",
    isActive: true,
    balance: "$1,004.37",
    age: 24,
    phone: "+1 (812) 442-3190",
    email: "humphreyvillarreal@autograte.com",
  },
  {
    _id: "6362e6b21e3951162c3a5c6e",
    name: "Owen Mccullough",
    isActive: false,
    balance: "$1,370.74",
    age: 35,
    phone: "+1 (872) 590-3312",
    email: "owenmccullough@autograte.com",
  },
  {
    _id: "6362e6b2d5569d7509c065e9",
    name: "Merritt Mathis",
    isActive: false,
    balance: "$2,582.94",
    age: 33,
    phone: "+1 (984) 575-2519",
    email: "merrittmathis@autograte.com",
  },
  {
    _id: "6362e6b216eb38ef4e0ff02a",
    name: "Cunningham Wynn",
    isActive: false,
    balance: "$1,890.79",
    age: 27,
    phone: "+1 (933) 417-2172",
    email: "cunninghamwynn@autograte.com",
  },
  {
    _id: "6362e6b22d9a84ec4efa6328",
    name: "Sloan Dalton",
    isActive: false,
    balance: "$1,260.23",
    age: 30,
    phone: "+1 (947) 490-3756",
    email: "sloandalton@autograte.com",
  },
  {
    _id: "6362e6b227b118ff92deb1c0",
    name: "Essie Gallagher",
    isActive: true,
    balance: "$2,370.73",
    age: 38,
    phone: "+1 (916) 406-2251",
    email: "essiegallagher@autograte.com",
  },
  {
    _id: "6362e6b2b0b0ae5c08a7c068",
    name: "Burke Snow",
    isActive: true,
    balance: "$1,318.09",
    age: 20,
    phone: "+1 (940) 575-3516",
    email: "burkesnow@autograte.com",
  },
  {
    _id: "6362e6b23cc110872e89e970",
    name: "Gonzales Fletcher",
    isActive: false,
    balance: "$1,656.04",
    age: 35,
    phone: "+1 (832) 524-2249",
    email: "gonzalesfletcher@autograte.com",
  },
  {
    _id: "6362e6b213f1be555539cf51",
    name: "Sybil Kirby",
    isActive: true,
    balance: "$2,637.16",
    age: 33,
    phone: "+1 (984) 525-3352",
    email: "sybilkirby@autograte.com",
  },
  {
    _id: "6362e6b225b479b9c5b24774",
    name: "Mitchell Slater",
    isActive: false,
    balance: "$2,645.01",
    age: 23,
    phone: "+1 (981) 403-2326",
    email: "mitchellslater@autograte.com",
  },
  {
    _id: "6362e6b2528c1a575132e8d6",
    name: "Brown Valenzuela",
    isActive: true,
    balance: "$2,295.76",
    age: 25,
    phone: "+1 (864) 466-2534",
    email: "brownvalenzuela@autograte.com",
  },
  {
    _id: "6362e6b247130ab401a6b3e4",
    name: "Ada Owen",
    isActive: true,
    balance: "$1,267.32",
    age: 36,
    phone: "+1 (853) 435-3562",
    email: "adaowen@autograte.com",
  },
];

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
  if (hideButton !== null) {
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
  if (showButton !== null) {
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

/**
 * Función que recibe un dato de tipo **string** que corresponde al campo **_id** del
 * usuario y lo usa para buscar el usuario
 * @param {string} id
 * @returns {[{
 * _id: string;
 * name: string;
 * isActive: boolean;
 * balance: string;
 * age: number;
 * phone: string;
 * email: string;
 * }, number] | [null, number]}
 * Retorna un array de dos (2) elementos, en caso de encontrar el usuario, el
 * primer elemento corresponde al usuario y el segundo al índice que ocupa en
 * **objJson**, si no se encuentra el usuario retornara **null** como primer elemento y
 * **-1** como el segundo.
 */
const findUser = (id) => {
  const users = objJson.filter((user) => user._id === id);
  if (users.length > 0) {
    const user = users[0];
    return [user, objJson.indexOf(user)];
  }
  return [null, -1];
};

/**
 * Función que recibe un dato de tipo **string** que corresponde al campo **_id** del
 * usuario, busca el usuario y llena los campos del modal con sus datos.
 * @param {string} id
 */
const fillFields = (id) => {
  const userId = document.getElementById("userId");
  const userName = document.getElementById("userName");
  const userPhone = document.getElementById("userPhone");
  const userEmail = document.getElementById("userEmail");
  const userBalance = document.getElementById("userBalance");
  const userAge = document.getElementById("userAge");
  const userState = document.getElementById("userState");
  if (
    userId !== null &&
    userName !== null &&
    userPhone !== null &&
    userEmail !== null &&
    userBalance !== null &&
    userAge !== null &&
    userState !== null
  ) {
    const [user, index] = findUser(id);
    if (user !== null) {
      userId.value = user._id;
      userName.value = user.name;
      userPhone.value = user.phone;
      userEmail.value = user.email;
      userBalance.value = user.balance;
      userAge.value = user.age;
      userState.checked = user.isActive;
    } else {
      userId.value = "";
      userName.value = "";
      userPhone.value = "";
      userEmail.value = "";
      userBalance.value = "";
      userAge.value = "";
      userState.checked = false;
    }
  }
};

/**
 * Función que captura el evento **click** de las tarjetas de usuario e identifica si el
 * usuario quiere crear o editar un usuario.
 * @param {Event} event
 */
const checkUserCard = (event) => {
  const userCard = event.currentTarget;
  const userCardTitle = document.getElementById("userModalLabel");
  const deleteUserButton = document.getElementById("deleteUser");
  if (
    userCard !== null &&
    userCardTitle !== null &&
    deleteUserButton !== null
  ) {
    const userId = userCard.querySelector(".user-id");
    if (userId !== null) {
      userCardTitle.innerText = "Editar Usuario";
      deleteUserButton.classList.remove("d-none");
      fillFields(userId.value);
    } else {
      userCardTitle.innerText = "Crear Usuario";
      deleteUserButton.classList.add("d-none");
    }
  }
};

/**
 * Función flecha que recibe una **key** y un **value** y devuelve un objeto de tipo
 * **HTMLElement** que los representa.
 * @param {string} key
 * @param {string} value
 * @returns {HTMLDivElement}
 * Retorna un objeto de tipo **HTMLElement** que representa los datos suministrados.
 * @example <caption>Ejemplo de uso:</caption>
 * getUserCardInfo("Télefono", "+1 (926) 431-3694") =>
 * <span class="field__card-info">
 * <span class="field__card-info--bold">Télefono: </span>
 * +1 (926) 431-3694
 * </span>
 */
const getUserCardInfo = (key, value) => {
  const cardInfo = document.createElement("span");
  const cardKey = document.createElement("span");
  cardInfo.classList.add("field__card-info");
  cardKey.classList.add("field__card-info--bold");
  cardKey.innerText = key;
  cardInfo.appendChild(cardKey);
  cardInfo.append(value);
  return cardInfo;
};

/**
 * Función que recibe datos del usuario y devuelve en un objeto de tipo **HTMLElement**.
 * El objeto representa una tarjeta con los datos del cliente en el DOM.
 * @param {string} id
 * @param {string} name
 * @param {string} balance
 * @param {number} age
 * @param {string} phone
 * @param {string} email
 * @param {boolean} state
 * @returns {HTMLDivElement}
 * Retorna un objeto de tipo **HTMLElement** que representa al cliente en una tarjeta.
 * @example <caption>Ejemplo de uso:</caption>
 * getUserCard("Angeline Parrish", "+1 (926) 431-3694", "angelineparrish@autograte.com", true) =>
 * <div class="field__card field__card--active" data-bs-toggle="modal" data-bs-target="#userModal">
 * <input class="user-id" type="hidden" value="6362e6b26f6277ba7ba69777">
 * <p class="field__card-info field__card-info--title field__card-info--state">ACTIVO</p>
 * <div class="field__card-image"></div>
 * <div class="field__card-detail">
 * <span class="field__card-info"><span class="field__card-info--bold">Nombre: </span>
 * Angeline Parrish</span>
 * <span class="field__card-info"><span class="field__card-info--bold">Télefono: </span>
 * +1 (926) 431-3694</span>
 * <span class="field__card-info"><span class="field__card-info--bold">E-mail: </span>
 * angelineparrish@autograte.com</span>
 * <span class="field__card-info"><span class="field__card-info--bold">Balance: </span>
 * $3,880.63</span><span class="field__card-info">
 * <span class="field__card-info--bold">Edad: </span>26</span>
 * </div>
 * </div>
 */
const getUserCard = (id, name, balance, age, phone, email, state) => {
  const cardContainer = document.createElement("div");
  const cardUserId = document.createElement("input");
  const cardState = document.createElement("p");
  const cardImage = document.createElement("div");
  const cardDetail = document.createElement("div");
  const cardName = getUserCardInfo("Nombre: ", name);
  const cardBalance = getUserCardInfo("Balance: ", balance);
  const cardAge = getUserCardInfo("Edad: ", `${age}`);
  const cardPhone = getUserCardInfo("Télefono: ", phone);
  const cardEmail = getUserCardInfo("E-mail: ", email);
  cardContainer.setAttribute("data-bs-toggle", "modal");
  cardContainer.setAttribute("data-bs-target", "#userModal");
  cardContainer.classList.add(
    "field__card",
    state ? "field__card--active" : "field__card--inactive"
  );
  cardUserId.setAttribute("type", "hidden");
  cardUserId.setAttribute("value", id);
  cardUserId.classList.add("user-id");
  cardState.classList.add(
    "field__card-info",
    "field__card-info--title",
    "field__card-info--state"
  );
  cardState.innerText = state ? "ACTIVO" : "INACTIVO";
  cardImage.classList.add("field__card-image");
  cardDetail.classList.add("field__card-detail");
  cardDetail.appendChild(cardName);
  cardDetail.appendChild(cardPhone);
  cardDetail.appendChild(cardEmail);
  cardDetail.appendChild(cardBalance);
  cardDetail.appendChild(cardAge);
  cardContainer.appendChild(cardUserId);
  cardContainer.appendChild(cardState);
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardDetail);
  return cardContainer;
};

/**
 * Función flecha que retorna un objeto de tipo **HTMLElement** para crear un nuevo registro.
 * @returns {HTMLDivElement}
 * Retorna un objeto de tipo **HTMLElement** que representa una tarjeta para crear un nuevo usuario.
 * @example <caption>Ejemplo de uso:</caption>
 * getNewUserCard() =>
 * <div class="field__card" data-bs-toggle="modal" data-bs-target="#userModal">
 * <div class="field__card-image">
 * </div><div class="field__card-detail">
 * <span class="field__card-info field__card-info--title field__card-info--center">Crear Registro</span>
 * <span class="field__card-info field__card-info--center">Nuevo Usuario</span>
 * </div>
 * </div>
 */
const getNewUserCard = () => {
  const cardContainer = document.createElement("div");
  const cardImage = document.createElement("div");
  const cardDetail = document.createElement("div");
  const cardTitle = document.createElement("span");
  const cardText = document.createElement("span");
  cardContainer.setAttribute("data-bs-toggle", "modal");
  cardContainer.setAttribute("data-bs-target", "#userModal");
  cardContainer.classList.add("field__card");
  cardImage.classList.add("field__card-image");
  cardDetail.classList.add("field__card-detail");
  cardTitle.classList.add(
    "field__card-info",
    "field__card-info--title",
    "field__card-info--center"
  );
  cardText.classList.add("field__card-info", "field__card-info--center");
  cardTitle.innerText = "Crear Registro";
  cardText.innerText = "Nuevo Usuario";
  cardDetail.appendChild(cardTitle);
  cardDetail.appendChild(cardText);
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardDetail);
  return cardContainer;
};

/**
 * Función flecha que recibe un array de objetos tipo **Usuario** y un contenedor
 * tipo **HTMLElement** y los renderiza en el DOM.
 * @param {{
 * _id: string;
 * name: string;
 * isActive: boolean;
 * balance: string;
 * age: number;
 * phone: string;
 * email: string;
 * }[]} users
 * @param {HTMLElement} container
 */
const renderUsers = (users, container) => {
  const newUserCard = getNewUserCard();
  newUserCard.addEventListener("click", checkUserCard);
  container.innerHTML = "";
  container.appendChild(newUserCard);
  users.forEach((user) => {
    const userCard = getUserCard(
      user._id,
      user.name,
      user.balance,
      user.age,
      user.phone,
      user.email,
      user.isActive
    );
    userCard.addEventListener("click", checkUserCard);
    container.appendChild(userCard);
  });
};

/**
 * Función flecha que calcula la página actual y el número de resultados
 * mostrados y lo renderiza en el DOM junto al total de resultados.
 * @param {number} totalResults
 * @param {number} currentResults
 */
const setPaginationInfo = (totalResults, currentResults) => {
  const currentPageElement = document.querySelector(".paginator__page");
  const currentResultsElement = document.getElementById("currentResults");
  const totalResultsElement = document.getElementById("totalResults");
  if (
    currentPageElement !== null &&
    currentResultsElement !== null &&
    totalResultsElement !== null
  ) {
    const displayedResults =
      currentResults + userPerPage > totalResults
        ? totalResults
        : currentResults + userPerPage;
    const currentPage = Math.ceil(displayedResults / userPerPage);
    currentPageElement.innerText = currentPage;
    currentResultsElement.innerText = displayedResults;
    totalResultsElement.innerText = totalResults;
  }
};

/**
 * Función que recibe un array de objetos tipo **Usuario** y la página actual en la
 * que se encuentra y devuelve una copia del array sin modificar el original.
 * Además si se recibe un texto de búsqueda, se filtrara por el nombre del
 * usuario.
 * @param {{
 * _id: string;
 * name: string;
 * isActive: boolean;
 * balance: string;
 * age: number;
 * phone: string;
 * email: string;
 * }[]} users
 * @param {number} currentResults
 * @param {string} search
 * @returns {{
 * _id: string;
 * name: string;
 * isActive: boolean;
 * balance: string;
 * age: number;
 * phone: string;
 * email: string;
 * }[]}
 * Devuelve una copia de un array con **userPerPage** (n) cantidad de objetos de
 * tipo **Usuario** sin modificar el arreglo original que recibe como entrada.
 */
const usersPagination = (users, currentResults, search = "") => {
  if (search.length === 0) {
    const totalResults = users.length;
    setPaginationInfo(totalResults, currentResults);
    return users.slice(currentResults, currentResults + userPerPage);
  }
  const usersSearch = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalResults = usersSearch.length;
  setPaginationInfo(totalResults, currentResults);
  return usersSearch.slice(currentResults, currentResults + userPerPage);
};
