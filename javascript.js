const ROCK = "Rock 🪨";
const PAPER = "Paper 📄";
const SCISSORS = "Scissors ✂️";
const WIN_COLOR = "greenyellow";
const LOSE_COLOR = "rgb(255 64 87)";
const DRAW_COLOR = "gold";
const DEFAULT_COLOR = "";

function isMobileDevice() {
    if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ||
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)))
        return true;
    else
        return false;
}

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
    if (computerIsWinner(formattedPlayerSelection, computerSelection)) {
        roundResult.style.color = "rgb(255 64 87)";
        return `You lose this round! ${computerSelection} beats ${formattedPlayerSelection}.`;
    }
    else if (playerIsWinner(formattedPlayerSelection, computerSelection)) {
        roundResult.style.color = "greenyellow";
        return `You win this round! ${formattedPlayerSelection} beats ${computerSelection}.`;
    }
    else {
        roundResult.style.color = "white";
        return `It's a draw. ${formattedPlayerSelection} vs ${computerSelection}.`;
    }
}

function resetButtonsBackgroundColor() {
    buttons.forEach(button => button.style['background-color'] = DEFAULT_COLOR);
}

const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('#roundResult');
const score = document.querySelector('#score');
const gameResult = document.querySelector('#gameResult');
console.log(navigator.userAgent);
console.log(navigator.platform);
if (isMobileDevice()) {
    buttons.forEach(button => button.style['font-size'] = '15px');
}
let wins = 0;
let defeats = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        resetButtonsBackgroundColor();
        let result = playRound(button.id, getComputerChoice());
        if (result.includes("win")) {
            wins++;
            button.style['background-color'] = WIN_COLOR;
        }
        else if (result.includes("lose")) {
            defeats++;
            button.style['background-color'] = LOSE_COLOR;
        }
        else {
            button.style['background-color'] = DRAW_COLOR;
        }
        gameResult.textContent = "";
        roundResult.textContent = result;
        score.textContent = `SCORE: ${wins}-${defeats}`;
        if (wins == 5 || defeats == 5) {
            if (wins > defeats) {
                gameResult.style.color = WIN_COLOR;
                gameResult.textContent = `You win the game!`;
            }
            else {
                gameResult.style.color = LOSE_COLOR;
                gameResult.textContent = `You lose the game!`;
            }
            wins = 0;
            defeats = 0;
        }
    });
});
