const board = document.querySelector('.game-board');
const diceResult = document.getElementById('diceResult');
const rollDiceButton = document.getElementById('rollDice');

// Create 15x15 grid for the Ludo board
for (let i = 0; i < 15 * 15; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
}

// Roll dice function
function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = 'Dice: ' + result;
    return result;
}

rollDiceButton.addEventListener('click', rollDice);

// Placeholder for game logic
function movePiece(piece, steps) {
    // Implement movement logic here
}
