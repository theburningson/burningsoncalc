let display = document.getElementById("display");
let currentValue = "";
let isDegree = false; // default radian mode

// Basic input
function press(num) {
  currentValue += num;
  display.innerText = currentValue;
}

// Clear button
function clearDisplay() {
  currentValue = "";
  display.innerText = "0";
}

// Equal (=) with cinematic flash
function calculate() {
  display.innerText = "Lord of Calc is here";
  setTimeout(() => {
    try {
      let result = eval(currentValue);
      display.innerText = result;
      currentValue = result.toString();
    } catch {
      display.innerText = "Error";
      currentValue = "";
    }
  }, 1500);
}

// Toggle Degree/Radian mode (optional)
function toggleMode() {
  isDegree = !isDegree;
  display.innerText = isDegree ? "Mode: Degree" : "Mode: Radian";
}

// Scientific functions (Trigno + sqrt)
function scientific(func) {
  try {
    let value = parseFloat(currentValue);
    if (isDegree) value = value * Math.PI / 180; // convert to radian if degree mode
    let result;
    switch(func) {
      case 'sin': result = Math.sin(value); break;
      case 'cos': result = Math.cos(value); break;
      case 'tan': result = Math.tan(value); break;
      case 'sqrt': result = Math.sqrt(value); break;
    }
    display.innerText = result;
    currentValue = result.toString();
  } catch {
    display.innerText = "Error";
    currentValue = "";
  }
}
