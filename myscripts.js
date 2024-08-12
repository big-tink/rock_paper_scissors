console.log("Hello World!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
        if (computerChoice === 1) {
            computerChoice = "rock"
        } else if (computerChoice === 2) {
            computerChoice = "paper"
        } else {
            computerChoice = "scissors"
        }
}

function getHumanChoice() {
    let humanChoice = prompt("Please type rock, paper or scissors:");
    humanChoice;
}

function playRound(computerChoice, humanChoice)  {
    getHumanChoice();
    getComputerChoice();
}