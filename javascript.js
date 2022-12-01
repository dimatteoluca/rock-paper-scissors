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
        return `It's a draw. ${formattedPlayerSelection} vs ${computerSelection}.`;
}

const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('#roundResult');
const score = document.querySelector('#score');
const gameResult = document.querySelector('#gameResult');
let wins = 0;
let defeats = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.id, getComputerChoice());
        if (result.includes("win"))
            wins++;
        else if (result.includes("lose"))
            defeats++;
        gameResult.textContent = "";
        roundResult.textContent = result;
        score.textContent = `Score: ${wins}-${defeats}`;
        if (wins == 5 || defeats == 5) {
            if (wins > defeats)
                gameResult.textContent = `You win the game!`;
            else if (wins < defeats)
                gameResult.textContent = `You lose the game!`;
            else
                gameResult.textContent = `The game ends in a draw.`;
            wins = 0;
            defeats = 0;
        }
    });
});
