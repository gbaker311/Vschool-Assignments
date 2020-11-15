readline = require("readline-sync");
//ask user for questions
const number1 = readline.questionInt("May I have your first number? ");
const number2 = readline.questionInt("May I have your second number? ");

//Convert user response to number
const num1 = Number(number1);
const num2 = Number(number2);

//
// console.log(num1, num2);

//ask user to pick a type of operation using the keyInSelect
const operator = ["Add", "Subtract", "Multiply", "Divide"],
  index = readline.keyInSelect(operator, "Which Operation?");

console.log("ok, I will " + operator[index] + " " + "your two numbers");
//Run function based on operator[index] match

if (operator[index] == "Add") {
  add();
} else if (operator[index] == "Subtract") {
  sub();
} else if (operator[index] == "Multiply") {
  mul();
} else div();

//Operation functions
git;
function add() {
  let result = num1 + num2;
  console.log(result);
}
function sub() {
  let result = num1 - num2;
  console.log(result);
}
function mul() {
  let result = num1 * num2;
  console.log(result);
}
