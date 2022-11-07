document.addEventListener("DOMContentLoaded", () => {
  /**
   * Declaración de variables y captura de elementos necesarios del DOM.
   */
  let fieldCounter = 999;
  const jsonResponse = [];
  const fieldsForm = document.getElementById("fieldsForm");
  const mainField = document.getElementById("mainField");
  const addFieldButton = document.getElementById("addField");
  const removeFieldButton = document.getElementById("removeField");
  const getJsonButton = document.getElementById("getJson");
  const jsonContainer = document.getElementById("jsonContainer");
  /**
   * Comprobación de que los elementos capturados no contengan un valor **null**.
   */
  if (
    fieldsForm !== null &&
    mainField !== null &&
    addFieldButton !== null &&
    removeFieldButton !== null &&
    getJsonButton !== null &&
    jsonContainer !== null
  ) {
    /**
     * Se agrega evento **click** al botón que agrega nuevos campos al formulario.
     */
    addFieldButton.addEventListener("click", () => {
      /**
       * Al agregarse un campo se habilita el botón para eliminar campos del formulario
       * y el botón para enviar el formulario.
       */
      removeFieldButton.disabled = false;
      getJsonButton.disabled = false;
      /**
       * Se suma 1 al contador global de campos (fieldCounter), se cuenta el número de campos
       * que ya están en el formulario haciendo uso de la clase **dynamic** para identificarlos.
       * Se clona el campo modelo desde el DOM.
       */
      fieldCounter += 1;
      const currentFieldsNumber =
        document.querySelectorAll(".dynamic").length + 1000;
      const mainFieldClone = mainField.cloneNode(true);
      mainFieldClone.setAttribute("id", `field__${currentFieldsNumber}`);
      mainFieldClone.classList.add("dynamic");
      /**
       * Se itera a través de la clase **dynamic__input** que identifica los inputs del modelo.
       * Se cambian los atributos **id** y **placeholder**, reemplazando los asteriscos dispuestos
       * en el modelo por el identificador del campo.
       */
      Array.from(mainFieldClone.querySelectorAll(".dynamic__input")).forEach(
        (input) => {
          input.classList.add("input-data");
          const oldId = input.getAttribute("id");
          const oldPlaceholder = input.getAttribute("placeholder");
          input.setAttribute(
            "id",
            oldId.replace("*", `${currentFieldsNumber}`)
          );
          input.setAttribute(
            "placeholder",
            oldPlaceholder.replace("*", `${currentFieldsNumber}`)
          );
        }
      );
      /**
       * De igual manera se itera sobre los elementos con la clase **dynamic__label** con el
       * mismo propósito de cambiar el label de cada campo.
       */
      Array.from(mainFieldClone.querySelectorAll(".dynamic__label")).forEach(
        (label) => {
          const oldLabel = label.innerText;
          label.innerText = oldLabel.replace("*", `${currentFieldsNumber}`);
        }
      );
      /**
       * Se agrega el nuevo campo al formulario dispuesto en el DOM.
       */
      fieldsForm.insertAdjacentElement("afterbegin", mainFieldClone);
    });
    /**
     * Se agrega evento **click** al botón que elimina campos del formulario.
     */
    removeFieldButton.addEventListener("click", () => {
      /**
       * Se obtiene el último campo concatenando **field__** con el contador global de campos
       * (fieldCounter) y así obtener su **id**. Se elimina el **nodo** y se resta 1 al contador
       * global. Finalmente, se comprueba el número de campos en el formulario, si llegase a
       * coincidir con el valor **999** significa que no hay campos en el formulario y por ende
       * se procede a desactivar los botones de envió de formulario y de eliminación de campos.
       */
      const fieldToRemove = document.getElementById(`field__${fieldCounter}`);
      fieldToRemove.remove();
      fieldCounter -= 1;
      if (fieldCounter === 999) {
        removeFieldButton.disabled = true;
        getJsonButton.disabled = true;
      }
    });
    /**
     * Se agrega evento **click** al botón que envía el formulario.
     */
    getJsonButton.addEventListener("click", (event) => {
      /**
       * Se vacía el arreglo que almacena la respuesta, ya que si no lo hacemos, seguirá llenándose
       * con los mismos datos en cada petición del usuario. Se itera sobre los inputs identificándolos
       * con la clase **input-data** y se procede a crear un objeto tomando los valores de sus atributos
       * **id** y **value**, nótese que se reemplazan las cadenas vacías por un valor **null**.
       * Por último se imprime en consola el resultado y se envía al DOM a través de un **textarea**
       * para que el usuario lo visualice.
       */
      event.preventDefault();
      jsonResponse.splice(0, jsonResponse.length);
      Array.from(document.querySelectorAll(".input-data")).forEach((input) => {
        const id = checkNumber(input.getAttribute("id"));
        const value = withoutExtraSpaces(input.value);
        jsonResponse.unshift({
          id,
          value: value !== "" ? value : null,
        });
      });
      console.log(jsonResponse);
      jsonContainer.innerText = JSON.stringify(jsonResponse);
    });
  }
});
