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
const buttons = document.querySelectorAll('.button.number');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event.target.innerText);
  });
});
/*-------------------------------- Variables --------------------------------*/
let firstNumber = '';
let secondNumber = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
