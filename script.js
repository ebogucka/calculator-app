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
  if (b === 0) {
    return 'ERROR';
  }
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

var firstNumber = null;
var secondNumber = null;
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
  if (firstNumber === null) {
    firstNumber = Number(displayValue);
  } else {
    secondNumber = Number(displayValue);
    const result = operate(this.operator, firstNumber, secondNumber);
    displayValue = result;
    firstNumber = result;
    secondNumber = null;
  }
  this.operator = operator;
  isAwaitingNumberInput = true;
  document.getElementById('display').textContent = displayValue;
}

function handleEqualsClick() {
  secondNumber = Number(displayValue);
  if (firstNumber !== null && secondNumber !== null) {
    const result = operate(operator, firstNumber, secondNumber);
    displayValue = result;
    firstNumber = null;
    secondNumber = null;
    operator = '';
    document.getElementById('display').textContent = displayValue;
    isAwaitingNumberInput = true;
  }
}

function handleResetClick() {
  firstNumber = null;
  secondNumber = null;
  operator = '';
  displayValue = '';
  document.getElementById('display').textContent = displayValue;
  isAwaitingNumberInput = true;
}

function handleDeleteClick() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').textContent = displayValue;
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

const resetKey = document.querySelector('#resetKey');
resetKey.addEventListener('click', () => {
  handleResetClick();
});

const deleteKey = document.querySelector('#delKey');
deleteKey.addEventListener('click', () => {
  handleDeleteClick();
});
