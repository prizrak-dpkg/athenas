document.addEventListener("DOMContentLoaded", () => {
  const jsonResponse = [];
  let fieldCounter = 999;
  const fieldsForm = document.getElementById("fieldsForm");
  const mainField = document.getElementById("mainField");
  const addFieldButton = document.getElementById("addField");
  const removeFieldButton = document.getElementById("removeField");
  const getJsonButton = document.getElementById("getJson");
  const jsonContainer = document.getElementById("jsonContainer");
  if (
    fieldsForm !== null &&
    mainField !== null &&
    addFieldButton !== null &&
    removeFieldButton !== null &&
    getJsonButton !== null &&
    jsonContainer !== null
  ) {
    addFieldButton.addEventListener("click", () => {
      removeFieldButton.disabled = false;
      getJsonButton.disabled = false;
      fieldCounter += 1;
      const currentFieldsNumber =
        document.querySelectorAll(".dynamic").length + 1000;
      const mainFieldClone = mainField.cloneNode(true);
      mainFieldClone.setAttribute("id", `field__${currentFieldsNumber}`);
      mainFieldClone.classList.add("dynamic");
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
      Array.from(mainFieldClone.querySelectorAll(".dynamic__label")).forEach(
        (label) => {
          const oldLabel = label.innerText;
          label.innerText = oldLabel.replace("*", `${currentFieldsNumber}`);
        }
      );
      fieldsForm.insertAdjacentElement("afterbegin", mainFieldClone);
    });
    removeFieldButton.addEventListener("click", () => {
      const fieldToRemove = document.getElementById(`field__${fieldCounter}`);
      fieldToRemove.remove();
      fieldCounter -= 1;
      if (fieldCounter === 999) {
        removeFieldButton.disabled = true;
        getJsonButton.disabled = true;
      }
    });
    getJsonButton.addEventListener("click", (event) => {
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
