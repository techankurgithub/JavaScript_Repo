const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("game staring...!!");
}

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCICCORS = "SCICCORS";
const DEFAULT_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMP_WINS = "COMPUTER_WINS";
let gameIsRunning = false;

const getPlayerChoice = function () {
  const choice = prompt(
    ` ${ROCK}, ${PAPER} or ${SCICCORS} ?`,
    ""
  ).toUpperCase();
  if (choice !== ROCK && choice !== PAPER && choice !== SCICCORS) {
    alert(`Invalid choice !. We choose ${DEFAULT_CHOICE} for you`);
    return DEFAULT_CHOICE;
  }
  return choice;
};

const getComputerChoice = function () {
  const random = Math.random();
  if (random < 0.34) {
    return ROCK;
  } else if (random < 0.67) {
    return PAPER;
  } else {
    return SCICCORS;
  }
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCICCORS) ||
    (cChoice === SCICCORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMP_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting... !!");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log("Player choice :: " + playerChoice);
  console.log("Computer choice :: " + computerChoice);
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});

// REST operator
const sumUp = (showResult, ...numbers) => {
  let sum = 0;
  for (const element of numbers) {
    sum += element;
  }
  showResult(sum);
};

const showResult = (sum) => {
  console.log("The final sum is :: " + sum);
};

sumUp(showResult, 1, 2, 3, 44, 67, 890);
sumUp(showResult, 1, 2, 3, 44, 67, 890, 7, 88, 567, 0);

// const person = {
//   name: "Max",
//   greet: function hello() {
//     console.log("Hello there !!");
//   },
// };

// person.greet();

// const demo = function startDemo() {
//   console.log("demo staring...!!");
// };

// Anonymons function
// const demo = function  () {
//   console.log("demo staring...!!");
// };

// startGameBtn.addEventListener("click", demo);
