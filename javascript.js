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
    return (playerSelection == "Rock" && computerSelection == "Paper" ||
            playerSelection == "Paper" && computerSelection == "Scissors" ||
            playerSelection == "Scissors" && computerSelection == "Rock");
}

function playerIsWinner(playerSelection, computerSelection) {
    return (playerSelection == "Rock" && computerSelection == "Scissors" ||
            playerSelection == "Paper" && computerSelection == "Rock" ||
            playerSelection == "Scissors" && computerSelection == "Paper");
}

function isValidInput(playerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    return (lowerCase == "rock" || lowerCase == "paper" || lowerCase == "scissors");
}

function formatSelection(selection) {
    let lowerCase = selection.toLowerCase();
    if (lowerCase == "rock")
        return "Rock";
    else if (lowerCase == "paper")
        return "Paper";
    else if (lowerCase == "scissors")
        return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let formattedPlayerSelection;
    if (!isValidInput(playerSelection))
        return `The value '${playerSelection}' is not valid!`;
    else
        formattedPlayerSelection = formatSelection(playerSelection);
    if (computerIsWinner(formattedPlayerSelection, computerSelection))
        return `You lose! ${computerSelection} beats ${formattedPlayerSelection}`;
    else if (playerIsWinner(formattedPlayerSelection, computerSelection))
        return `You win! ${formattedPlayerSelection} beats ${computerSelection}`;
    else
        return "It's a draw!";
}