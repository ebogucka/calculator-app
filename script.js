function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

var firstNumber = undefined;
var secondNumber = undefined;
var operator = '';
var displayValue = '';
var isAwaitingNumberInput = true;

function handleDigitClick(digit) {
  if (isAwaitingNumberInput) {
    displayValue = '';
    isAwaitingNumberInput = false;
  }
  displayValue += digit;
  document.getElementById('display').textContent = displayValue;
}

function handleOperatorClick(operator) {
  if (firstNumber === undefined) {
    firstNumber = Number(displayValue);
  } else {
    secondNumber = Number(displayValue);
    const result = operate(this.operator, firstNumber, secondNumber);
    displayValue = result;
    firstNumber = result;
    secondNumber = undefined;
  }
  this.operator = operator;
  isAwaitingNumberInput = true;
  document.getElementById('display').textContent = displayValue;
}

function handleEqualsClick() {
  secondNumber = Number(displayValue);
  if (firstNumber !== undefined && secondNumber !== undefined) {
    const result = operate(operator, firstNumber, secondNumber);
    displayValue = result;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = '';
    document.getElementById('display').textContent = displayValue;
    isAwaitingNumberInput = true;
  }
}

const digitButtons = document.querySelectorAll('.digitKey');
digitButtons.forEach((button) => {
  button.addEventListener('click', () => {
    handleDigitClick(button.textContent);
  });
});

const operatorButtons = document.querySelectorAll('.operatorKey');
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    handleOperatorClick(button.textContent);
  });
});

const equalsKey = document.querySelector('.equalsKey');
equalsKey.addEventListener('click', () => {
  handleEqualsClick();
});
