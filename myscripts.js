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
        return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("We are playing first to 5 wins. \nPlease type rock, paper or scissors:");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound()  {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You have selected " + humanSelection + ". Computer has selected " + computerSelection + ".")
        console.log("Congrats! You win this round!")
        console.log("Your score is " + ++humanScore + ".")
        console.log("Computer score is " + computerScore + ".")
    } else if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("You have selected " + humanSelection + ". Computer has selected " + computerSelection + ".")
        console.log("Congrats! You win this round!")
        console.log("Your score is " + ++humanScore + ".")
        console.log("Computer score is " + computerScore + ".")
    } else if (computerSelection === "scissors" && humanSelection === "rock") {
        console.log("You have selected " + humanSelection + ". Computer has selected " + computerSelection + ".")
        console.log("Congrats! You win this round!")
        console.log("Your score is " + ++humanScore + ".")
        console.log("Computer score is " + computerScore + ".")
    } else if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("You have selected " + humanSelection + ". Computer has selected " + computerSelection + ".")
        console.log("No luck! Computer wins this round!")
        console.log("Your score is " + humanScore + ".")
        console.log("Computer score is " + ++computerScore + ".")
    } else if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("You have selected " + humanSelection + ". Computer has selected " + computerSelection + ".")
        console.log("No luck! Computer wins this round!")
        console.log("Your score is " + humanScore + ".")
        console.log("Computer score is " + ++computerScore + ".")
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("You have selected " + humanSelection + ". Computer has selected " + computerSelection + ".")
        console.log("No luck! Computer wins this round!")
        console.log("Your score is " + humanScore + ".")
        console.log("Computer score is " + ++computerScore + ".")
    } else {
        console.log("You have selected " + humanSelection + ". Computer has selected " + computerSelection + ".")
        console.log("It's a tie! Score remains the same.")
    }

    return (humanScore, computerScore)
}

function playGame() {

    playRound();

        if (humanScore === 5) {
            console.log("Congratulations! You have won the game!")
            console.log("If you would like to play again, please refresh the page.")
            console.log("If not, it was fun playing you. Have a great day!")
        } else if (computerScore === 5) {
            console.log("Better luck next time!")
            console.log("If you would like to play again, please refresh the page.")
            console.log("If not, it was fun playing you. Have a great day!")
        } else {
            playGame()
        }
}

playGame()

