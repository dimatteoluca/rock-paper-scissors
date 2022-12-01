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
        return `You lose this round! ${computerSelection} beats ${formattedPlayerSelection}`;
    else if (playerIsWinner(formattedPlayerSelection, computerSelection))
        return `You win this round! ${formattedPlayerSelection} beats ${computerSelection}`;
    else
        return "It's a draw!";
}

// function game() {
//     let playerWins = 0;
//     let computerWins = 0;
//     let errors = 0;
//     let ret, errString;
//     for(let i=0; i<5; i++) {
//         ret = playRound(prompt(`Round ${i+1}`), getComputerChoice());
//         if (ret.includes("win"))
//             playerWins++;
//         else if (ret.includes("lose"))
//             computerWins++;
//         else if (ret.includes("not valid"))
//             errors++;
//     }
//     if (errors > 0)
//         errString = ` You entered invalid values ${errors} times`;
//     else
//         errString = '';
//     if (playerWins > computerWins)
//         console.log(`You win the game ${playerWins}-${computerWins}!${errString}`);
//     else if (playerWins < computerWins)
//         console.log(`You lose the game ${playerWins}-${computerWins}!${errString}`);
//     else
//         console.log("It's a draw!");
// }

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('#resultDiv');
let res;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        res = playRound(button.id, getComputerChoice());
        resultDiv.textContent = res;
    });
});
