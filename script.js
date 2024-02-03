document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  let expression = "0";
  let decimalClicked = false;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.innerText;

      if (buttonText === "AC") {
        expression = "0";
        decimalClicked = false;
      } else if (buttonText === "=") {
        expression = eval(expression);
        decimalClicked = false;
      } else if (buttonText === "+/-") {
        expression = parseFloat(expression) * -1 || expression;
        decimalClicked = false;
      } else if (buttonText === "%") {
        expression = eval(expression) / 100 || expression;
        decimalClicked = false;
      } else if (buttonText === ".") {
        if (!decimalClicked) {
          expression += buttonText;
          decimalClicked = true;
        }
      } else {
        if (expression === "0") {
          expression = buttonText;
        } else {
          expression += buttonText;
        }
      }

      display.value = expression;
    });
  });
});
