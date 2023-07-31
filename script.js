let divResult = document.querySelector(".result");
let divScore = document.querySelector(".score");
let divChoice = document.querySelector(".choice");

function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection) {
    let arr = ["Rock", "Paper", "Scissors"];
    computerSelection = getComputerChoice();
    divChoice.textContent = "You chosed " + arr[playerSelection - 1] + 
    ", Computer chosed " + arr[computerSelection - 1] + ".";
    if (playerSelection == computerSelection) {
        divResult.textContent = "Tie";
    } else if (playerSelection == 1 && computerSelection == 3 || 
        playerSelection == 2 && computerSelection == 1 || 
        playerSelection == 3 && computerSelection == 2) {
            divResult.textContent = "Win !";
            playerCount++;
        } else {
            divResult.textContent = "Lose ...";
            computerCount++;
        }
    if (playerCount === 5 || computerCount === 5) {
        if (playerCount > computerCount) {
            divScore.textContent = "Your score : " + playerCount.toString() +
            " Computer's score : " + computerCount.toString() +
            " You win !";
        } else if (computerCount > playerCount) {
            divScore.textContent = "Your score : " + playerCount.toString() +
            " Computer's score : " + computerCount.toString() +
            " You lose ...";
        } else {
            divScore.textContent = "Your score : " + playerCount.toString() +
            " Computer's score : " + computerCount.toString() +
            " It's a tie";
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        playRound(+item.value);
    });
});