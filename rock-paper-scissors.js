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
        // do nothing
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
    } else {
        computerScore++;
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection);
    }

    const gameResult = function () {
        if (humanScore === computerScore) {
            return "You tied";
        } else if (humanScore > computerScore) {
            return "You win";
        } else {
            return "You lose";
        }
    }

    const gameOverMessage = gameResult() + " - final score User: " + humanScore + ", Computer: " + computerScore;
    return gameOverMessage;
}

console.log(playGame());