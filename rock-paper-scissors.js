let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
let computerSelection = "";

const finalResult = function () {
    if (humanScore === computerScore) {
        return "You tied";
    } else if (humanScore > computerScore) {
        return "You win";
    } else {
        return "You lose";
    }
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    displayResults();
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    displayResults();
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    displayResults();
});

const gameResults = document.querySelector("#gameResults");

function displayResults() {
    if (humanScore >= 5 || computerScore >= 5) {
        const gameOverMessage = document.createElement("div");
        gameOverMessage.textContent = finalResult() + " - final score User: " + humanScore + ", Computer: " + computerScore;

        gameResults.appendChild(gameOverMessage);
    } else {
        const updatedChoices = document.createElement("div");
        updatedChoices.textContent = "human choice: " + humanSelection + " computer choice: " + computerSelection;

        const updatedScores = document.createElement("div");
        updatedScores.textContent = "human score: " + humanScore + " computer score: " + computerScore;
        updatedScores.style.padding = "10px";

        gameResults.appendChild(updatedChoices);
        gameResults.appendChild(updatedScores);
    }
}

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return computerChoice[index];
}

function playRound(humanChoice, computerChoice) {
    humanSelection = humanChoice;
    computerSelection = computerChoice;

    if (humanChoice === computerChoice) {
        // do nothing
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
    } else {
        computerScore++;
    }

    console.log("human choice: " + humanChoice + " computer choice: " + computerChoice);
    console.log("human score: " + humanScore + " computer score: " + computerScore);
}

// console.log(playGame());