let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;  // Get number between 1 and 3 inclusive

    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    }
    return "scissor";
};

function getHumanChoice() {
    let userChoice = prompt("Type \"Rock\", \"Paper\" or \"Scissor\": "); // Get user choice
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    let humanChoiceUpper = humanChoice.toUpperCase()
    let compChoiceUpper = computerChoice.toUpperCase()

    // Determines the winner or loser and track the score 
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        console.log(`You win! ${humanChoiceUpper} beats ${compChoiceUpper}.`)
        humanScore+= 1
    } else if (humanChoice === computerChoice) {
        console.log("Draw!")
    } else {
        console.log(`You lose! ${compChoiceUpper} beats ${humanChoiceUpper}.`)
        computerScore += 1
    }
}

function playGame() {
    // for (let i = 0; i < 5; i++) {
    const humanSelection = document.querySelectorAll("button");
    humanSelection.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            let playerSelection = event.target.id;
            console.log(playerSelection);
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        });
    });
    // }
    if (humanScore > computerScore) {
            console.log(`Final Score:\n\tHuman Score: ${humanScore}\n\tComputer Score: ${computerScore}\n\t\t\t\t"YOU WON!"`);
    } else if (humanScore < computerScore) {
            console.log(`Final Score:\n\tHuman Score: ${humanScore}\n\tComputer Score: ${computerScore}\n\t\t\t\t"YOU LOSE!"`);
    } else if (humanScore !== 0 && computerScore !== 0){
        console.log(`Final Score:\n\tHuman Score: ${humanScore}\n\tComputer Score: ${computerScore}\n\t\t\t\t"DRAW!"`);
    };
};

playGame()