let currOperand, prevOperand, operation;

function reset() {
  currOperand = '';
  prevOperand = '';
  operation = undefined;
}

function chooseOperation(operation) {
  if (currOperand === '') return;
  if (prevOperand !== '') {
    compute();
  }
  operation = operation;
  prevOperand = currOperand;
  currOperand = '';
}

function compute() {
  let computation;
  const prev = parseFloat(prevOperand);
  const current = parseFloat(currOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
    default:
      return;
  }
  currOperand = computation;
  operation = undefined;
  prevOperand = '';
}

function getDisplayNumber(number) {
  const stringNumber = number.toString();
  const intDigits = parseFloat(stringNumber.split('.')[0]);
  const deciDigits = stringNumber.split('.')[1];
  let integerDisplay;
  if (isNaN(intDigits)) {
    integerDisplay = '';
  } else {
    integerDisplay = intDigits.toLocaleString('en', { maximumFractionDigits: 0 });
  }
  if (deciDigits != null) {
    return `${integerDisplay}.${deciDigits}`;
  } else {
    return integerDisplay;
  }
}

function updateCurrOperandEl() {
  const stringNumber = currOperand.toString();
  const intDigits = parseFloat(stringNumber.split('.')[0]);
  const deciDigits = stringNumber.split('.')[1];
  let integerDisplay;
  if (isNaN(intDigits)) {
    integerDisplay = '';
  } else {
    integerDisplay = intDigits.toLocaleString('en', { maximumFractionDigits: 0 });
  }
  if (deciDigits) {
    integerDisplay = `${integerDisplay}.${deciDigits}`;
  }

  currOperandEl.innerText = integerDisplay;
}

function updatePrevOperandEl() {
  const stringNumber = prevOperand.toString();
  const intDigits = parseFloat(stringNumber.split('.')[0]);
  const deciDigits = stringNumber.split('.')[1];
  let integerDisplay;
  if (isNaN(intDigits)) {
    integerDisplay = '';
  } else {
    integerDisplay = intDigits.toLocaleString('en', { maximumFractionDigits: 0 });
  }
  if (deciDigits) {
    integerDisplay = `${integerDisplay}.${deciDigits}`;
  }

  if (operation) {
    prevOperandEl.innerText = `${integerDisplay} ${operation}`;
  } else {
    prevOperandEl.innerText = '';
  }
}

const numBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const prevOperandEl = document.querySelector('[data-previous-operand]');
const currOperandEl = document.querySelector('[data-current-operand]');

// from start
reset();

numBtns.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.innerText;
    if (number === '.' && currOperand.includes('.')) return;
    currOperand = currOperand.toString() + number.toString();
    updateCurrOperandEl();
    updatePrevOperandEl();
  });
});

operationBtns.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerText);
    updateCurrOperandEl();
    updatePrevOperandEl();
  });
});

equalsBtn.addEventListener('click', button => {
  compute();
  updateCurrOperandEl();
  updatePrevOperandEl();
});

allClearBtn.addEventListener('click', button => {
  reset();
  updateCurrOperandEl();
  updatePrevOperandEl();
});

deleteBtn.addEventListener('click', button => {
  currOperand = currOperand.toString().slice(0, -1);
  updateCurrOperandEl();
  updatePrevOperandEl();
});