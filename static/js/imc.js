document.addEventListener("DOMContentLoaded", () => {
  /**
   * Captura de elementos necesarios del DOM.
   */
  const calculateImcButton = document.getElementById("calculateImc");
  const resultContainer = document.getElementById("imcResult");
  const imcCardInfo = document.querySelector(".imc-card__info");
  /**
   * Comprobación de que los elementos capturados no contengan un valor **null**.
   */
  if (
    calculateImcButton != null &&
    resultContainer !== null &&
    imcCardInfo !== null
  ) {
    /**
     * Se agrega evento al botón que para calcular el IMC, el cual desencadena
     * las respectivas llamadas a los métodos que cumplen con la tarea.
     */
    calculateImcButton.addEventListener("click", (event) => {
      const result = getImc(event);
      imcCardInfo.innerText = result.imc;
      resultContainer.innerHTML = "";
      resultContainer.appendChild(result.message);
    });
  }
});
