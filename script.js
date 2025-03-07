let gameMode = "single";
let playerScore = 0;
let opponentScore = 0;

function setMode(mode) {
    gameMode = mode;
    document.getElementById("gameMode").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
}

function playerMove(playerChoice) {
    let opponentChoice = gameMode === "single" ? getRandomChoice() : prompt("Player 2, enter Rock, Paper, or Scissors").toLowerCase();
    showResult(playerChoice, opponentChoice);
}

function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function showResult(playerChoice, opponentChoice) {
    document.getElementById("playerChoice").textContent = "Player chose: " + playerChoice;
    document.getElementById("opponentChoice").textContent = "Opponent chose: " + opponentChoice;
    document.getElementById("result").classList.remove("hidden");

    let winner = determineWinner(playerChoice, opponentChoice);
    document.getElementById("winner").textContent = winner;

    if (winner === "Player wins!") playerScore++;
    if (winner === "Opponent wins!") opponentScore++;

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("opponentScore").textContent = opponentScore;
}

function determineWinner(player, opponent) {
    if (player === opponent) return "It's a draw!";
    if ((player === "rock" && opponent === "scissors") || 
        (player === "paper" && opponent === "rock") || 
        (player === "scissors" && opponent === "paper")) {
        return "Player wins!";
    }
    return "Opponent wins!";
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
