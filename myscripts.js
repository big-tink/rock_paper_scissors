
let humanScore = 0;
let computerScore = 0;
let humanGameSet = 0;
let computerGameSet = 0;


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

    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        ++humanGameSet;
        results.textContent = "You have won the set!"
    } else if (computerScore === 5) {
        computerScore = 0;
        humanScore = 0;
        ++computerGameSet;
        results.textContent = "Computer has won the set!"
    }

    if (humanGameSet === 5) {
        humanGameSet = 0;
        computerGameSet = 0;
        results.textContent = "Congratulations! You have won!"
    } else if (computerGameSet === 5) {
        humanGameSet = 0;
        computerGameSet = 0;
        results.textContent = "No luck this time! Try again!"
    }

    console.log(gameResult, humanScore, computerScore, humanGameSet, computerGameSet);
    currentGameScore.textContent = 'Current Score:\nPlayer: ' + humanScore + '\nComputer: ' + computerScore;
    currentSetScore.textContent = 'Current Set Score:\nPlayer: ' + humanGameSet +'\nComputer: ' + computerGameSet;
    return (humanScore, computerScore, humanGameSet, computerGameSet)
}

const currentGame = document.querySelector(".currentGame");
const results = document.createElement("div");
results.setAttribute("style", "font-size: 25px");
currentGame.appendChild(results);

const overallResults = document.querySelector(".resultsContainer");
const currentGameScore = document.createElement("div");
const currentSetScore = document.createElement("div");
overallResults.appendChild(currentGameScore);
overallResults.appendChild(currentSetScore);

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
