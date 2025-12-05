function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;  // Get number between 1 and 3 inclusive

    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    }
    return "scissor";
};