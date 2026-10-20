document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.querySelector("#status");
    const newGameButton = document.querySelector(".btn");
    
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";
    let gameEnded = false;

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    function checkWinner() {
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    squares.forEach((square, index) => {
        // Exercise 1: Layout the board
        square.classList.add("square");

        // Exercise 3: Mouse enter (hover effect)
        square.addEventListener("mouseenter", () => {
            if (gameState[index] === "" && !gameEnded) {
                square.style.backgroundColor = currentPlayer === "X" ? "var(--lighterBlue)" : "var(--coral)";
                square.style.transform = "scale(1.05)";
                square.style.cursor = "pointer";
            }
        });

        // Exercise 3: Mouse leave (revert hover effect)
        square.addEventListener("mouseleave", () => {
            if (gameState[index] === "" && !gameEnded) {
                square.style.backgroundColor = "";
                square.style.transform = "";
                square.style.cursor = "";
            }
        });

        // Exercise 2 & 4: Add click event, place mark, and check winner
        square.addEventListener("click", () => {
            if (gameState[index] === "" && !gameEnded) {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Clear hover styles upon clicking
                square.style.backgroundColor = "";
                square.style.transform = "";
                square.style.cursor = "";

                // Exercise 4: Check for a winner after each move
                let winner = checkWinner();
                if (winner) {
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                    gameEnded = true;
                } else {
                    // Alternate player for the next turn
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    // Exercise 5: Restart the game when clicking the New Game button
    newGameButton.addEventListener("click", () => {
        gameState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = "X";
        gameEnded = false;

        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");

        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
            square.style.backgroundColor = "";
            square.style.transform = "";
            square.style.cursor = "";
        });
    });
});