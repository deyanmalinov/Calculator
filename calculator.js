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

// Attach event listeners to the buttons
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