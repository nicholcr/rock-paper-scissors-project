const computerSelection = 0;
const humanSelection = 0;

function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return computerChoice[index];
}

function getHumanChoice() {
    let userChoice = prompt("Please type 'Rock', 'Paper', or 'Scissors'");
    return userChoice;
}



console.log(humanSelection);