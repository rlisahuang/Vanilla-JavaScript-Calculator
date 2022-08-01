/***********************************
 * TASK 0: WARM UP
 * 
* --- Getting Started ---
 * 1. Read the lines of code up to "END OF TASK 0: WARM UP" in `app.js` (current file),
 *   as well as `index.html` under the current directory for locating DOM element with id `logging`
 * 2. Based on your understanding of the code, 
 *   tell the experimenter how you expect the application to behave when you click on the `loggingBoard`
 * 3. Click on the "View" button at the upper right corner of the editor, 
 *   and choose `index.html` under your current directory in the dialog.
 * 
 * --- The View/Hide Button ---
 * 1. Press View/Hide Button several times and see what happens.
 * -- DO NOT click inside the view box... yet. --
 * 2. You may try scrolling around inside the code editor. 
 * 3. You may try switching tabs, too, if you have other tabs opened in the editor.
 * 
 * --- Your first click ---
 * 1. Now click on the text "Debugging Logs" inside the interface that just opened.
 *   - At the bottom of the interface, you will see all the *UI states* after your click:
 *      - The leftmost is your starting state, while the rightmost is the final UI state;
 *      - The blue arrow is the click event that you just provided:
 *        - It starts from the UI state at which you clicked, and ends at the final state it results in
 *      - What about the numbered circles? Keep reading :)
 *   - By default, you are shown the look of the interface at its final UI state as a result of your click.
 *     Feel free to click on different UI states and see what happens to the interface.
 *   - Inside the editor, you will see a bunch of numbered circles at different lines:
 *      - If a line of code has a bubble numbered index _i_, it means that this line of code
 *        is on the call stack of the execution that results in UI state _i_ 
 *        (also with a same numbered bubble). We call such bubbles *trace bubbles*.
 *   - WITHOUT MAKING ANY EDITS YET, tell the experimenter if the application behaved as your expectation.
 * 
 * 2. Now go to the line where the `innerText` of `loggingBoard` is changed. Change it to something else.
 *   - As you start typing, you may notice that the trace bubbles inside the editor turned brown.
 *      - Whenever you see brown trace bubbles, they indicate that the visualization is no longer 
 *        up to date with your code. 
 *      - Blue trace bubbles, on the contrary, indicate that the visualization *is* up to date.
 *   - After you are done making your desired changes, save the current file (`app.js`) to refresh the 
 *     visualization. 
 *     - You may save the file using the VSCode UI menus, or `Cmd + S` on macOS / `Control + S` on 
 *     Windows/Linux.
 * 
 * 3. What happened to the visualization? Summarize your findings to the experimenter.
 * 
 * --- What is `visual.log()`? ---
 * You may be familiar with `console.log()` in JavaScript, a common technique to print out data values 
 *   when debugging / testing your application.
 * Since you do not have access to the browser console inside this interface, we provide an alternative
 *   mechanism for you to log data, called `visual.log()`.
 * You may use `visual.log()` just as you use `console.log()`, except that `visual.log()` only takes 
 *   one argument, and that the logs will appear in the `Debugging Logs` area that you just clicked on.
 * To see how it works, please do the following:
 * 1. Go inside the function `clickOnLogging`, and log something of your choice using `visual.log()` 
 *   at the beginning of the function, before you reassign `this.innerText`.
 * 2. Remember to save the file after the edit.
 * 3. Use the visualization to understand what happened, and ask the experimenter any questions you have.
 * 4. You may use `visual.log()` anywhere within this file `app.js` for the rest of the this study.
 * 
 * --- The "Clear" Button ---
 * There is a "Clear" button right above the UI States. This is meant for clearing
 *   the click events the visualization has recorded and resetting the interface back to its initial state.
 * Try click on the "Clear" button, and click on the "Debugging Logs" area again.
 * 
 * --- Runtime Errors ---
 * 1. Remove everything after `this.innerText = ` in `clickOnLogging`. You will definitely get a runtime
 *   error, specifically a syntax error, because of this change. 
 * 2. Save the file after your edit.
 * 3. You will see the actual runtime messages appearing on top of the UI States. This is where in the
 *   visualization you will see runtime errors with your application.
 *  
 * --- Ending ---
 * Congratulations! You have learned how to use the visualization, which we call Step'n'Tune.
 * Again, if you have any questions about anything, please do hesitate to ask your experimenter.
 * !!!Please remove the code for TASK 0 before you move on!!!
 */

const loggingBoard = document.querySelector('#logging');
loggingBoard.addEventListener('click', clickOnLogging);

function clickOnLogging() {
  this.innerText = "Logging area has been clicked!";
}

/************************************
 * END OF TASK 0: WARM UP
************************************/

/************************************
 * From this point and on, you will be focusing on solving tasks using the visualization.
 * The experimenter will not interrupt you or answer any questions unless the visualization is problematic 
 *   (or you believe there is a bug with the visualization).
 * 
 * Once again, feel free to take breaks, move onto future tasks, or end the study early.
 * You are encouraged, but not required, to "think aloud" -- tell the experimenter explicitly any thoughts,
 *   observations, or struggles you have.
 ************************************/

/************************************
 * TASK 1: UPDATE VALUES
 * 1. Read the following code/files under this directory:
 *  - `index.html`
 *  - functions `updateValues`, and the click event handlers for `numBtns` in app.js` (current file)
 * 2. Based on your understanding of the code,
 *   tell the experimenter how you expect the application to behave when you enter value "1"
 * 3. Click "1" in the calculator to confirm your understanding. If you believe the code is buggy,
 *   fix the bug. (Remember: If you want to log any data, you can use `visual.log()`)
 * 4. When you finish / decide to move on, press "Clear" to reset the recorded click events.
 * 
 * ------------
 * 
 * TASK 2: ADDITION
 * 1. Read the following code/files under this directory:
 *  - `index.html`
 *  - functions `chooseOperation`, `compute` and `updateValues` in app.js` (current file)
 * 2. Based on your understanding of the code, 
 *   tell the experimenter how you expect the application to behave when you press "8 + "
 * 3. Click "8" and "+" in the calculator to confirm your understanding. If you believe the code is buggy,
 *   fix the bug. (Remember: If you want to log any data, you can use `visual.log()`)
 * 4. When you finish / decide to move on, press "Clear" to reset the recorded click events.
 * 
 ************************************/

// global variables
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
  currOperand = `${computation}`;
  operation = undefined;
  prevOperand = '';
}


function updateValues() {
  currOperandEl.innerText = currOperand;
  prevOperandEl.innerText = `${prevOperand} ${operation}`;  
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