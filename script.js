function getComputerChoice() {
    n = Math.floor(Math.random() * 3 + 1);
    switch (n) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return null;
    }
}