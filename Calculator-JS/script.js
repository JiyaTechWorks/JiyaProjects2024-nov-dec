const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";

// Using a for loop instead of forEach
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function (event) {
      const value = event.target.innerText;

      if (value === "AC") {
         // Clear the display
         currentInput = "";
         display.value = "";
      } else if (value === "=") {
         // Evaluate the expression
         try {
            display.value = eval(currentInput);
            currentInput = display.value;  // Store the result for further operations
         } catch {
            display.value = "Error";
            currentInput = "";
         }
      } else {
         // Add number or operator to the input string
         currentInput += value;
         display.value = currentInput;
      }
   });
}
