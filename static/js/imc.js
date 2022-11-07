document.addEventListener("DOMContentLoaded", () => {
  const calculateImcButton = document.getElementById("calculateImc");
  const resultContainer = document.getElementById("imcResult");
  const imcCardInfo = document.querySelector(".imc-card__info");
  if (
    calculateImcButton != null &&
    resultContainer !== null &&
    imcCardInfo !== null
  ) {
    calculateImcButton.addEventListener("click", (event) => {
      const result = getImc(event);
      console.log(result);
      imcCardInfo.innerText = result.imc;
      resultContainer.innerHTML = "";
      resultContainer.appendChild(result.message);
    });
  }
});
