const buttons = Array.from(document.querySelectorAll(".btn"));
const display = document.querySelector(".display-screen");

let displayValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value == "=") {
      try {
        // displayValue = JSON.stringify(eval(displayValue));
        displayValue = JSON.stringify(
          Math.round(eval(displayValue) * 100) / 100
        );
        displayScreen();
      } catch {
        displayValue = "ERROR";
        displayScreen();
      }
    } else if (e.target.value == "AC") {
      displayValue = "";
      displayScreen();
    } else if (e.target.value == "C") {
      displayValue = displayValue.slice(0, -1);
      displayScreen();
    } else if (e.target.value == "+/-") {
      displayValue = parseInt(displayValue) * -1;
      displayScreen();
    } else {
      displayValue += e.target.value;
      displayScreen();
    }
  });
});

const displayScreen = () => {
  if (displayValue == "ERROR") {
    display.style.color = "red";
    display.value = displayValue;
  } else {
    display.style.color = "white";
    display.value = displayValue;
  }
};
