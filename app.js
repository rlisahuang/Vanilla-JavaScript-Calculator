// global variables
let currOperand, prevOperand, operation;

function reset() {
  currOperand = '';
  prevOperand = '';
  operation = undefined;
}

function chooseOperation(currOp) {
  if (currOperand === '') return;
  if (prevOperand !== '') {
    compute();
  }

  // weird bug: previously
  // operation = operation
  // where the rhs is the function param and the lhs is the global var
  operation = currOp;
  // visual.log(operation);
  // visualLog.innerText += `${operation}\n`;
  // visualLog.innerText += `${currOp}\n`;
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
  currOperand = `${computation}`;
  operation = undefined;
  prevOperand = '';
}

function wrapper() {
  if (operation) {
    prevOperandEl.innerText = `${prevOperand} ${operation}`;
  } else {
    prevOperandEl.innerText = '';
  }
}

function updateValues() {
  currOperandEl.innerText = currOperand;
  wrapper();
}

const numBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const prevOperandEl = document.querySelector('[data-previous-operand]');
const currOperandEl = document.querySelector('[data-current-operand]');

reset();

numBtns.forEach(button => {
button.addEventListener('click', () => {
    const number = button.innerText;
    if (number === '.' && currOperand.includes('.')) return;
    currOperand = currOperand.toString() + number.toString();
    updateValues();
  });
});

operationBtns.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerText);
    updateValues();
  });
});

equalsBtn.addEventListener('click', button => {
  compute();
  updateValues();
});

allClearBtn.addEventListener('click', button => {
  reset();
  updateValues();
});

deleteBtn.addEventListener('click', button => {
  currOperand = currOperand.toString().slice(0, -1);
  updateValues();
});