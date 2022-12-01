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
        return `You lose this round! ${computerSelection} beats ${formattedPlayerSelection}.`;
    else if (playerIsWinner(formattedPlayerSelection, computerSelection))
        return `You win this round! ${formattedPlayerSelection} beats ${computerSelection}.`;
    else
        return "It's a draw.";
}

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('#resultDiv');
let wins = 0;
let defeats = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.id, getComputerChoice());
        if (result.includes("win"))
            wins++;
        else if (result.includes("lose"))
            defeats++;
        if (wins == 5 || defeats == 5) {
            if (wins > defeats)
                resultDiv.textContent = result + ` You win the game: ${wins}-${defeats}!`;
            else if (wins < defeats)
                resultDiv.textContent = result + ` You lose the game: ${wins}-${defeats}!`;
            else
                resultDiv.textContent = result + ` The game ends in a draw: ${wins}-${defeats}.`;
            wins = 0;
            defeats = 0;
        }
        else {
            resultDiv.textContent = result + ` Score: ${wins}-${defeats}`;
        }
    });
});
