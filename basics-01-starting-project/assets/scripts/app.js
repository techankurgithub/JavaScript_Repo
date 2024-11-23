// alert("This is the JS script !!");

let currentResult = 0;
let logEntries = [];
//currentResult = currentResult + 10;

function getUserInput() {
  return parseInt(userInput.value);
}

function add() {
  //const result = num1 + num2;
  //alert("the result is :: " + result);
  const enteredNum = getUserInput();
  const initialValue = currentResult;
  const calcDescription = ` ${currentResult} + ${enteredNum}`;
  currentResult = currentResult + enteredNum;
  outputResult(currentResult, calcDescription);
  const logEntry = {
    operation: "Add",
    prevResult: initialValue,
    number: enteredNum,
    result: currentResult,
  };
  //logEntries.push(currentResult);
  logEntries.push(logEntry);  
  console.log(logEntries);
  //return result;
}

function subtract() {
  const enteredNum = getUserInput();
  const calcDescription = ` ${currentResult} - ${enteredNum}`;
  currentResult = currentResult - enteredNum;
  outputResult(currentResult, calcDescription); // from vender.js file
}

function multiply() {
  const enteredNum = getUserInput();
  const calcDescription = ` ${currentResult} * ${enteredNum}`;
  currentResult = currentResult * enteredNum;
  outputResult(currentResult, calcDescription);
}

function divide() {
  const enteredNum = getUserInput();
  const calcDescription = ` ${currentResult} / ${enteredNum}`;
  currentResult = currentResult / enteredNum;
  outputResult(currentResult, calcDescription);
}

//currentResult = add(5, 3);
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//outputResult(currentResult, "");
