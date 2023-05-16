const calcBtn = document.getElementById("calc-btn");
const calculator = document.getElementById("calculator");
const calcForm = document.getElementById("calc-form");
const resultDiv = document.getElementById("result");

calcBtn.addEventListener("click", () => {
  calculator.style.display = "block";
});

calcForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const num1 = Number(event.target.elements.num1.value);
  const num2 = Number(event.target.elements.num2.value);
  const operator = event.target.elements.operator.value;

  let result;

  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
  }

  resultDiv.innerHTML = `Result: ${result}`;
});
