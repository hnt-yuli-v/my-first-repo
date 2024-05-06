let gameState = {
    currentGameIndex: 0,
    currentSteps: 0,
    games: {},
    startTime: null,
    timer: null,
    initialGameStates: {}
};

let { currentGameIndex, currentSteps, games, startTime, timer, initialGameStates } = gameState;

const fetching = async () => {
    try {
        const response = await fetch('gameLightOut.json');
        const data = await response.json();
        games = data;
        initialGameStates = Object.values(games).map(game => game.initial_state); 
        setupGame(currentGameIndex);
    } catch (error) {
        console.error('Failed to fetch game data:', error);
    }
};

const startGame = (game) => {
    clearInterval(timer);
    startTime = Date.now();
    timer = setInterval(updateTime, 1000);

    currentSteps = 0;
    updateSteps();

    document.getElementById('minSteps').textContent = game.minimum_steps_to_win;

    const board = document.getElementById('gameBoard');
    board.innerHTML = '';

    game.initial_state.forEach((row, r) => {
        let tr = board.insertRow();
        row.forEach((cell, c) => {
            let td = tr.insertCell();
            td.className = cell === 1 ? 'lightOn' : '';
            td.onclick = () => toggleLights(r, c, game.initial_state);
        });
    });
};

const toggleLights = (r, c, grid) => {
    const originalGrid = JSON.stringify(grid); 
    const toggle = (r, c) => {
        if (r >= 0 && r < 5 && c >= 0 && c < 5) {
            grid[r][c] = 1 - grid[r][c];
            let cell = document.getElementById('gameBoard').rows[r].cells[c];
            cell.className = grid[r][c] === 1 ? 'lightOn' : '';
        }
    };

    toggle(r, c);
    toggle(r - 1, c);
    toggle(r + 1, c);
    toggle(r, c - 1);
    toggle(r, c + 1);

    currentSteps++;
    updateSteps();

    if (checkWin(grid)) {
        clearInterval(timer);
        setTimeout(() => {
            alert("Вітаємо! Ви перемогли!");
            restart();
        }, 1000);
    }

    if (JSON.stringify(grid) === originalGrid && currentSteps % 2 === 0) {
    
        currentSteps -= 2;
        updateSteps();
    }
};

const checkWin = (grid) => {
    return grid.every(row => row.every(cell => cell === 0));
};

const changeCombination = () => {
    currentGameIndex = (currentGameIndex + 1) % Object.keys(games).length;
    setupGame(currentGameIndex);
};

const restart = () => {
    currentSteps = 0;
    resetToInitialState();
};

const updateSteps = () => {
    document.getElementById('currentSteps').textContent = currentSteps;
};

const updateTime = () => {
    let elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('gameTime').textContent = elapsed;
};

window.onload = fetching;

const setupGame = (index) => {
    const gameKey = Object.keys(games)[index];
    const game = games[gameKey];
    startGame(game);
};

const resetSteps = () => {
    currentSteps = 0;
    updateSteps();
};

const resetToInitialState = () => {
    const gameKey = Object.keys(games)[currentGameIndex];
    const initialState = initialGameStates[gameKey];
    games[gameKey].initial_state = JSON.parse(JSON.stringify(initialState)); 
    startGame(games[gameKey]);
};

document.getElementById('newGameButton').addEventListener('click', restart);
