let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates random numbers
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

// Determines the winner
const compareGuesses = (human, computer, target) =>{
  let humanGuess = Math.abs(human - target)
  let computerGuess = Math.abs(computer - target)
  if (human >= 9 || human <= 0) {
    alert ('Please select a number from 1 - 9')
  }
  
  if (humanGuess < computerGuess || humanGuess === computerGuess ) {
    return true
  } else if (computerGuess < humanGuess) {
    return false
    }
  }

// Increments the score based on winner
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  }
  if (winner === 'computer') {
    computerScore++;
  }
}

// Keeps track of score
const advanceRound = () => {
  currentRoundNumber++
}