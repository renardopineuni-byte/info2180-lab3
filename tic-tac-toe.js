document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    
    // Initialize an array to track the state of the 9 game squares
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";

    squares.forEach((square, index) => {
        // Exercise 1: Layout the board
        square.classList.add("square");

        // Exercise 2: Add click event to place X or O
        square.addEventListener("click", () => {
            // Check if the square is empty before placing a mark (prevents overwriting for now)
            if (gameState[index] === "") {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Alternate player for the next turn
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});