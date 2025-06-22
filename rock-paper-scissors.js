function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return computerChoice[index];
}

function getHumanChoice() {
    let userChoice = prompt("Please type 'Rock', 'Paper', or 'Scissors'");
    return userChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

    for (let i = 1; i < 6; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection);
    }

    let gameResult = "";
    if (humanScore === computerScore) {
        gameResult = "You tied";
    } else if (humanScore > computerScore) {
        gameResult = "You win";
    } else {
        gameResult = "You lose";
    }

    return gameResult + " - final score User: " + humanScore + ", Computer: " + computerScore
}

console.log(playGame());