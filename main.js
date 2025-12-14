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
    const display = document.createElement("div");
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        display.textContent = (`You win! ${humanChoiceUpper} beats ${compChoiceUpper}.`);
        humanScore+= 1
    } else if (humanChoice === computerChoice) {
        display.textContent = ("Draw!");
    } else {
        display.textContent = (`You lose! ${compChoiceUpper} beats ${humanChoiceUpper}.`);
        computerScore += 1
    };
    document.body.appendChild(display);
};

function playGame() {
    const humanSelection = document.querySelectorAll("button");
    let round = 0;
    let isGameOver = false;
    const finalResult = document.createElement("div");
    humanSelection.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            let playerSelection = event.target.id;
            if (isGameOver) {
                return;
            }
            if (round < 5) {
                const computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
                round++;
                if (round === 5) {
                    isGameOver = true;
                    if (humanScore > computerScore) {
                        finalResult.textContent = (`Final Score:\n\tHuman Score: ${humanScore}\n\tComputer Score: ${computerScore}\n\t\t"YOU WON!"`);
                    } else if (humanScore < computerScore) {
                        finalResult.textContent = (`Final Score:\n\tHuman Score: ${humanScore}\n\tComputer Score: ${computerScore}\n\t\t"YOU LOSE!"`);
                    } else {
                        finalResult.textContent = (`Final Score:\n\tHuman Score: ${humanScore}\n\tComputer Score: ${computerScore}\n\t\t"DRAW!"`);
                    };
                    document.body.appendChild(finalResult);
                    return
                };
            };
        });
    });
};

playGame()