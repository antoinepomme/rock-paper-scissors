/*
Returns randomly 1 2 or 3 where :
1: Rock, 2: Paper, 3:Scissors
*/
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

/*
Ask user's input and compare it to the computer random's choice
User's win : return 1
Computer's wun : return 2
Tie: return 3
*/

function playRound() {
    let arr = ["Rock", "Paper", "Scissors"];
    playerSelection = 0;
    computerSelection = getComputerChoice();
    while (playerSelection == 0) {
        playerSelection = prompt("Type Rock, Paper or Scissors");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === "rock") {
            playerSelection = 1;
        } else if (playerSelection === "paper") {
            playerSelection = 2;
        } else if (playerSelection === "scissors") {
            playerSelection = 3;
        } else {
            playerSelection = 0;
        }
        console.log("You chosed " + arr[playerSelection - 1] + 
        ", Computer chosed " + arr[computerSelection - 1] + ".");
    }
    if (playerSelection == computerSelection) {
        return 3;
    } else if (playerSelection == 1 && computerSelection == 3
        || playerSelection == 2 && computerSelection == 1
        || playerSelection == 3 && computerSelection == 2) {
            return 1;
        } else {
            return 2;
        }
}

function game() {
    result = playRound(0, getComputerChoice());
    if (result == 1) {
        console.log("Win !");
    } else if (result == 2) {
        console.log("Lose ...");
    } else {
        console.log("Tie");
    }
}