const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => {
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.currentTarget.id;
    userChoiceDisplay.innerHTML = capitalizeFirstLetter(userChoice);
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  computerChoice = possibleChoices[randomNumber].id;
  computerChoiceDisplay.innerHTML = capitalizeFirstLetter(computerChoice);
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a Draw!";
  } else if (
    (computerChoice === 'rock' && userChoice === 'scissors') ||
    (computerChoice === 'scissors' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'rock')
  ) {
    result = "You Lost!";
  } else {
    result = "You Won!";
  }

  resultDisplay.innerHTML = result;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
