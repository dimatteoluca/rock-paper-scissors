function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);   // 0, 1 or 2
    if (randomNumber == 0)
        return "Rock";
    else if (randomNumber == 1)
        return "Paper";
    else
        return "Scissors";
}

function computerIsWinner(playerSelection, computerSelection) {
    return playerSelection == "Rock" && computerSelection == "Paper" ||
            playerSelection == "Paper" && computerSelection == "Scissors" ||
            playerSelection == "Scissors" && computerSelection == "Rock";
}

function playerIsWinner(playerSelection, computerSelection) {
    return playerSelection == "Rock" && computerSelection == "Scissors" ||
            playerSelection == "Paper" && computerSelection == "Rock" ||
            playerSelection == "Scissors" && computerSelection == "Paper";
}

function singleRound(playerSelection, computerSelection) {
    if (computerIsWinner(playerSelection, computerSelection))
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    else if (playerIsWinner(playerSelection, computerSelection))
        return `You win! ${playerSelection} beats ${computerSelection}`;
    else
        return "It's a draw!";
}
