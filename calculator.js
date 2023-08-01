function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var expression = document.getElementById('display').value;
  var result = eval(expression);
  document.getElementById('display').value = result;
}

function appendToDisplay(value) {
  var display = document.getElementById('display');
  var currentValue = display.value;
  if ((value === '+' || value === '-' || value === '*' || value === '/') &&
      (currentValue.endsWith('+') || currentValue.endsWith('-') || currentValue.endsWith('*') || currentValue.endsWith('/'))) {
    return;
  }

  display.value += value;
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.calculator input[type="button"]');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (this.value === '=') {
        calculate();
      } else if (this.value === 'C') {
        clearDisplay();
      } else {
        appendToDisplay(this.value);
      }
    });
  }
});