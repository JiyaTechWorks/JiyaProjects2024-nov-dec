let output = document.getElementById('display');

//ading functionality for AC button
function AC() {
   console.log("AC() funtion called.")
   output.value = "";
}

// adding functionality for equal to button
function handleOperatorClick(operator) {
   switch (operator) {
      case "+":
          console.log("+ is clicked");
          break;
      case "-":
          console.log("- is clicked");
          break;
      case "*":
          console.log("* is clicked");
          break;
      case "/":
          console.log("/ is clicked");
          break;
      default:
          console.log("Unknown operator selected.");
          break;
  }
}