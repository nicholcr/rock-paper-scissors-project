const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return computerChoice[index];
}

function getHumanChoice() {
    let userChoice = prompt("Please type 'Rock', 'Paper', or 'Scissors'");
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "You both chose the same move!"
    } else if (humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "paper" 
        || humanChoice === "paper" && computerChoice === "rock") {
            return "You win!"
            humanScore++;
    } else {
        return "You lose..."
        computerScore++;
    }
}

function playGame() {
    
}

console.log(playRound(humanSelection, computerSelection));