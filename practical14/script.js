const gameBoard = document.getElementById('game-board');
const newGameBtn = document.getElementById('new-game-btn');
const restartBtn = document.getElementById('restart-btn');
const timerDisplay = document.getElementById('timer');
const stepsDisplay = document.getElementById('steps');
const targetStepsDisplay = document.getElementById('target-steps');
const messageDisplay = document.getElementById('message');

let board = [];
let initialBoard = [];
let timer;
let time = 0;
let steps = 0;
let targetSteps = 0;
let currentConfig = 0;

function initializeGame() {
    fetch('gameLightOut.json')
        .then(response => response.json())
        .then(data => {
            const config = data.configurations[currentConfig];
            board = JSON.parse(JSON.stringify(config.board));
            initialBoard = JSON.parse(JSON.stringify(config.board));
            targetSteps = config.targetSteps;
            targetStepsDisplay.textContent = targetSteps;
            renderBoard();
            resetGame();
        });
}

function renderBoard() {
    gameBoard.innerHTML = '';
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            if (cell) cellDiv.classList.add('on');
            cellDiv.addEventListener('click', () => handleCellClick(rowIndex, colIndex));
            gameBoard.appendChild(cellDiv);
        });
    });
}

function handleCellClick(row, col) {
    toggleCell(row, col);
    toggleCell(row - 1, col);
    toggleCell(row + 1, col);
    toggleCell(row, col - 1);
    toggleCell(row, col + 1);
    steps++;
    stepsDisplay.textContent = steps;
    renderBoard();
    checkWinCondition();
}

function toggleCell(row, col) {
    if (row >= 0 && row < 5 && col >= 0 && col < 5) {
        board[row][col] = !board[row][col];
    }
}

function checkWinCondition() {
    const allOff = board.every(row => row.every(cell => !cell));
    if (allOff) {
        clearInterval(timer);
        const message = steps <= targetSteps 
            ? `Вітаємо! Ви завершили гру за ${steps} кроків, що є мінімумом.` 
            : `Вітаємо! Ви завершили гру за ${steps} кроків. Можна було краще!`;
        messageDisplay.textContent = message;
    }
}

function resetGame() {
    clearInterval(timer);
    time = 0;
    steps = 0;
    timerDisplay.textContent = time;
    stepsDisplay.textContent = steps;
    messageDisplay.textContent = '';
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        time++;
        timerDisplay.textContent = time;
    }, 1000);
}

function startNewGame(data) {
    currentConfig = Math.floor(Math.random() * data.configurations.length);
    const config = data.configurations[currentConfig];
    board = JSON.parse(JSON.stringify(config.board));
    initialBoard = JSON.parse(JSON.stringify(config.board));
    targetSteps = config.targetSteps;
    targetStepsDisplay.textContent = targetSteps;
    renderBoard();
    resetGame();
}

newGameBtn.addEventListener('click', () => {
    fetch('gameLightOut.json')
        .then(response => response.json())
        .then(data => startNewGame(data));
});

restartBtn.addEventListener('click', () => {
    board = JSON.parse(JSON.stringify(initialBoard));
    resetGame();
    renderBoard();
});

initializeGame();
