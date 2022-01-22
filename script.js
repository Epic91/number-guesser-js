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
const compareGuesses = (userGuess, computerGuess, target) => {
  if (target - userGuess <= target - computerGuess) {
    return true;
  } else { 
    return false;
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