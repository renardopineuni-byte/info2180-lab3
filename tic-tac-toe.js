document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";

    squares.forEach((square, index) => {
        // Exercise 1: Layout the board
        square.classList.add("square");

        // Exercise 3: Mouse enter (hover effect)
        square.addEventListener("mouseenter", () => {
            // Only apply hover effect if the square hasn't been played yet
            if (gameState[index] === "") {
                square.style.backgroundColor = currentPlayer === "X" ? "var(--lighterBlue)" : "var(--coral)";
                square.style.transform = "scale(1.05)";
                square.style.cursor = "pointer";
            }
        });

        // Exercise 3: Mouse leave (revert hover effect)
        square.addEventListener("mouseleave", () => {
            if (gameState[index] === "") {
                square.style.backgroundColor = "";
                square.style.transform = "";
                square.style.cursor = "";
            }
        });

        // Exercise 2: Add click event to place X or O
        square.addEventListener("click", () => {
            if (gameState[index] === "") {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Clear hover styles upon clicking
                square.style.backgroundColor = "";
                square.style.transform = "";
                square.style.cursor = "";

                // Alternate player for the next turn
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});