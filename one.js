let display = document.getElementById('display');
let currentInput = '0';

    function appendNumber(num) {
      if (currentInput === '0') {
        currentInput = num;
      } else {
        currentInput += num;
      }
      display.textContent = currentInput;
    }

    function appendOperator(operator) {
      currentInput += operator;
      display.textContent = currentInput;
    }

    function calculate() {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch (error) {
        display.textContent = 'Error';
      }
    }

    function clearDisplay() {
      currentInput = '0';
      display.textContent = currentInput;
    }