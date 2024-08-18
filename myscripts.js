
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
        return computerChoice;
};

function playGame(humanSelection) {

    let gameResult;
    const computerChoice = getComputerChoice();

    if (humanSelection === "rock" && computerChoice === "paper" ||
        humanSelection === "paper" && computerChoice === "scissors" ||
        humanSelection === "scissors" && computerChoice === "rock") {
            computerScore++;
            results.textContent = 'You have chosen ' + humanSelection + 
            '. Computer has chosen ' + computerChoice + '. Computer has won!';
    } else if (humanSelection === "rock" && computerChoice === "scissors" ||
        humanSelection === "paper" && computerChoice === "rock" ||
        humanSelection === "scissors" && computerChoice === "paper") {
            humanScore++;
            results.textContent = 'You have chosen ' + humanSelection + 
            '. Computer has chosen ' + computerChoice + '. You have won!';
    } else {    
            results.textContent = "It's a tie!"
    }

    console.log(gameResult, humanScore, computerScore)
}

const currentGame = document.querySelector(".currentGame");
const results = document.createElement("div");
currentGame.appendChild(results);



const btnRock = document.querySelector("button.rock");
btnRock.addEventListener("click", () => {
    playGame("rock");
});

const btnPaper = document.querySelector("button.paper");
btnPaper.addEventListener("click", () => {
    playGame("paper");
});

const btnScissors = document.querySelector("button.scissors");
btnScissors.addEventListener("click", () => {
    playGame("scissors");
});

