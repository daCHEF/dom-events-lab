/*
AAU, I want to be able to select numbers so that I can perform operations with them.
AAU, I want to be able to add two numbers together.
AAU, I want to be able to subtract one number from another.
AAU, I want to be able to multiply two numbers together.
AAU, I want to be able to divide one number by another.
AAU, I want to be able to see the output of the mathematical operation.
AAU, I want to be able to clear all operations and start from 0.
*/

/*
Preliminary Questions:

When planning our code, we might consider the following:

1. How do we capture the “value” when a number button is clicked?
2. What steps are needed to achieve this?
3. Can we use existing attributes to tie events to our number button elements?
 */

/* */


/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let numOne = '';
let numTwo = '';
let operator = '';
let calcOutput = '';

/*------------------------ Cached Element References (non-constants) ------------------------*/
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');
const equalsBtn = document.querySelector('.equals');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');

/*-------------------------------- Functions --------------------------------*/
const clearClick = (event) => {
  display.innerText = '';
  numOne = '';
  numTwo = '';
  operator = '';
  calcOutput = '';
  operatorBtns.forEach((btn) => btn.style.border = '');
};

const numClick = (event) => {
  console.log('Number buttin clicked');
    if (calcOutput) clearClick();

  if (numOne && operator) {
    display.innerText += event.target.innerText;
    numTwo = display.innerText;
  } else {
    display.innerText += event.target.innerText;
    numOne = display.innerText;
  }
};

const operatorClick = (event) => {
    operator = event.target.innerText;
    operatorBtns.forEach((btn) => btn.style.border = '');
    event.target.style.border = '2px solid white';
    display.innerText = '';
  };

const equalsClick = (event) => {
  let number1 = parseFloat(numOne);
  let number2 = parseFloat(numTwo);
  let result;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    default:
      result = 'Error';
  }

  display.innerText = result;
  calcOutput = result;
  numOne = result.toString();
  numTwo = '';
  operator = '';
};

/*----------------------------- Event Listeners -----------------------------*/
clearBtn.addEventListener('click', clearClick);
equalsBtn.addEventListener('click', equalsClick);
numberBtns.forEach((btn) => btn.addEventListener('click', numClick));
operatorBtns.forEach((btn) => btn.addEventListener('click', operatorClick));


