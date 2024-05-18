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

function initializeBoard(boardConfig) {
    board = boardConfig.board;
    initialBoard = JSON.parse(JSON.stringify(board));
    targetSteps = boardConfig.targetSteps;
    renderBoard();
    resetGame();
    targetStepsDisplay.textContent = targetSteps;
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

function startNewGame(configurations) {
    let minStepsConfig = configurations[0];
    let minSteps = minStepsConfig.targetSteps;
    
    configurations.forEach(config => {
        if (config.targetSteps < minSteps) {
            minSteps = config.targetSteps;
            minStepsConfig = config;
        }
    });
    
    initializeBoard(minStepsConfig);
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

newGameBtn.addEventListener('click', () => {
    fetch('gameLightOut.json')
        .then(response => response.json())
        .then(data => startNewGame(data.configurations));
});

restartBtn.addEventListener('click', () => {
    board = JSON.parse(JSON.stringify(initialBoard));
    resetGame();
    renderBoard();
});


fetch('gameLightOut.json')
    .then(response => response.json())
    .then(data => startNewGame(data.configurations));
