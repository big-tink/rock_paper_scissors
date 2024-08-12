console.log("Hello World!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compResult = Math.floor(Math.random() * 3) + 1;
        if (compResult === 1) {
            compResult = "rock"
        } else if (compResult === 2) {
            compResult = "paper"
        } else {
            compResult = "scissors"
        }
}

function getHumanChoice() {
    let userChoice = prompt("Please type rock, paper or scissors:");
}

function playGame() {
    getHumanChoice();
    getComputerChoice;
}