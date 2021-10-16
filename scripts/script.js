const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker}
}

const gameBoard = (() => {
    let gameboard = [];

    const getGameboard = () => gameboard;
    
    const emptyGameboard = () => {
        while (gameboard.length > 0) {
            gameboard.pop();
        }
    };

    const isPositionFree = (position) => {
        return !gameboard[position];
    };

    const addToGameboard = (position, marker) => {
        gameboard[position] = marker;
    };

    return {getGameboard, emptyGameboard, isPositionFree, addToGameboard}
})();

const displayController = (() => {
    const gameboardContainer = document.getElementsByClassName("gameboard-container")[0];
    const playerXNameTextBox = document.getElementById("player-x-name");
    const playerONameTextBox = document.getElementById("player-o-name");
    const startRestartBtn = document.getElementById("start-restart-btn");

    const createGameboard = (callback) => {
        for (let index = 0; index < 9; index++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("cell");
            newDiv.addEventListener("click", function() {
                callback(index);
            });
            gameboardContainer.appendChild(newDiv);
        }
    };

    const addListenerToStartRestartBtn = (callback) => {
        startRestartBtn.addEventListener("click", function() {
            callback(startRestartBtn.innerText);
        });
    }

    const getPlayerXName = () => {
        if (playerXNameTextBox.value !== "") {
            return playerXNameTextBox.value;
        } else {
            return playerXNameTextBox.placeholder;
        }
    };

    const getPlayerOName = () => {
        if (playerONameTextBox.value !== "") {
            return playerONameTextBox.value;
        } else {
            return playerONameTextBox.placeholder;
        }
    };

    const makePlayerXReadyOnly = () => {
        playerXNameTextBox.readOnly = true;
    };

    const makePlayerXEditable = () => {
        playerXNameTextBox.readOnly = false;
    };

    const makePlayerOReadyOnly = () => {
        playerONameTextBox.readOnly = true;
    };

    const makePlayerOEditable = () => {
        playerONameTextBox.readOnly = false;
    };

    const clearPlayerXName = () => {
        playerXNameTextBox.value = "";
    };

    const clearPlayerOName = () => {
        playerONameTextBox.value = "";
    };

    const flipStartRestartBtn = () => {
        if (startRestartBtn.innerText === "Start") {
            startRestartBtn.innerText = "Restart";
        } else {
            startRestartBtn.innerText = "Start";
        }
    };

    const addMarkerToGameboard = (index, marker) => {
        gameboardContainer.children[index].innerText = marker;
    };

    const clearGameboard = () => {
        while (gameboardContainer.firstChild) {
            gameboardContainer.removeChild(gameboardContainer.firstChild);
        }
    };
    
    return {
            createGameboard,
            addListenerToStartRestartBtn,
            getPlayerXName,
            getPlayerOName,
            makePlayerXReadyOnly,
            makePlayerXEditable,
            makePlayerOReadyOnly,
            makePlayerOEditable,
            clearPlayerXName,
            clearPlayerOName,
            flipStartRestartBtn,
            addMarkerToGameboard,
            clearGameboard
        }
})();

const game = (() => {
    let playerX;
    let playerO;
    let gameStarted;
    let roundsPlayed;
    let playersTurn;
    let winner;
    let isWinner;
    let isDraw;

    const isValidMarker = (marker) => {
        if (marker === "X"  || marker === "O") {
            return true;
        } else {
            return false;
        }
    }

    const checkTopRowForWinner = (gameboard) => {
        if (gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) {
            if (isValidMarker(gameboard[0]) && isValidMarker(gameboard[1]) && isValidMarker(gameboard[2])) {
                winner = gameboard[0];
                isWinner = true;
            }
        }
    };

    const checkMiddleRowFOrWinner = (gameboard) => {
        if (gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]) {
            if (isValidMarker(gameboard[3]) && isValidMarker(gameboard[4]) && isValidMarker(gameboard[5])) {
                winner = gameboard[3];
                isWinner = true;
            }
        }
    };

    const checkBottomRowForWinner = (gameboard) => {
        if (gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]) {
            if (isValidMarker(gameboard[6]) && isValidMarker(gameboard[7]) && isValidMarker(gameboard[8])) {
                winner = gameboard[6];
                isWinner = true;
            }
        }
    };

    const checkLeftColumnForWinner = (gameboard) => {
        if (gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) {
            if (isValidMarker(gameboard[0]) && isValidMarker(gameboard[3]) && isValidMarker(gameboard[6])) {
                winner = gameboard[0];
                isWinner = true;
            }
        }
    };

    const checkMiddleColumnWinner = (gameboard) => {
        if (gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]) {
            if (isValidMarker(gameboard[1]) && isValidMarker(gameboard[4]) && isValidMarker(gameboard[7])) {
                winner = gameboard[1];
                isWinner = true;
            }
        }
    };

    const checkRightColumnForWinner = (gameboard) => {
        if (gameboard[2] === gameboard[5] && gameboard[2] === gameboard[8]) {
            if (isValidMarker(gameboard[2]) && isValidMarker(gameboard[5]) && isValidMarker(gameboard[8])) {
                winner = gameboard[2];
                isWinner = true;
            }
        }
    };

    const checkBlToTrForWinner = (gameboard) => {
        if (gameboard[6] === gameboard[4] && gameboard[6] === gameboard[2]) {
            if (isValidMarker(gameboard[6]) && isValidMarker(gameboard[4]) && isValidMarker(gameboard[2])) {
                winner = gameboard[6];
                isWinner = true;
            }
        }
    };

    const checkTlToBrForWinner = (gameboard) => {
        if (gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8]) {
            if (isValidMarker(gameboard[0]) && isValidMarker(gameboard[4]) && isValidMarker(gameboard[8])) {
                winner = gameboard[0];
                isWinner = true;
            }
        }
    };

    const checkRowsForWinner = (gameboard) => {
        checkTopRowForWinner(gameboard);
        checkMiddleRowFOrWinner(gameboard);
        checkBottomRowForWinner(gameboard);
    };

    const checkColumnsForWinner = (gameboard) => {
        checkLeftColumnForWinner(gameboard);
        checkMiddleColumnWinner(gameboard);
        checkRightColumnForWinner(gameboard);
    };

    const checkDiagnolForWinner = (gameboard) => {
        checkBlToTrForWinner(gameboard);
        checkTlToBrForWinner(gameboard);
    };

    const checkForWinner = (gameboard) => {
        checkRowsForWinner(gameboard);
        checkColumnsForWinner(gameboard);
        checkDiagnolForWinner(gameboard);
    };

    const checkForDraw = () => {
        if (roundsPlayed=== 9 && !isWinner) {
            isDraw = true;
        }
    }

    const changePlayersTurn = () => {
        if (playersTurn === playerX) {
            playersTurn = playerO;
        } else {
            playersTurn = playerX;
        }
    }

    const alertWinner = () => {
        if (winner === playerX.getMarker()) {
            alert(`${playerX.getName()} won!`);
            
        } else {
            alert(`${playerO.getName()} won!`);
        }
    };

    const alertDraw = () => {
        alert("Draw!");
    };

    const manageRoundResults = () => {
        if (!isWinner && !isDraw) {
            changePlayersTurn();
        } else if (isWinner) {
            alertWinner();
        } else {
            alertDraw();
        }
    };

    const playRound = (index) => {
        if (gameStarted && gameBoard.isPositionFree(index) && !isWinner && !isDraw) {
            gameBoard.addToGameboard(index, playersTurn.getMarker());
            displayController.addMarkerToGameboard(index, playersTurn.getMarker());
            roundsPlayed++;
            checkForWinner(gameBoard.getGameboard());
            checkForDraw();
            manageRoundResults();
        }
    };

    const startGame = () => {
        displayController.makePlayerXReadyOnly();
        displayController.makePlayerOReadyOnly();
        displayController.flipStartRestartBtn();
        gameStarted = true;
        roundsPlayed = 0;
        playerX = Player(displayController.getPlayerXName(), "X");
        playerO = Player(displayController.getPlayerOName(), "O");
        playersTurn = playerX;
        winner = null;
        isWinner = false;
        isDraw = false;        
    };

    const restartGame = () => {
        gameStarted = false;
        gameBoard.emptyGameboard();
        displayController.clearGameboard();
        displayController.clearPlayerXName();
        displayController.clearPlayerOName();
        displayController.createGameboard(playRound);
        displayController.makePlayerXEditable();
        displayController.makePlayerOEditable();
        displayController.flipStartRestartBtn();
        
    };

    const startRestartGame = (innerText) => {
        if (innerText === "Start") {
            startGame();
        } else {
            restartGame();
        }
    };

    const initGame = () => {
        gameStarted = false;
        gameBoard.emptyGameboard();
        displayController.clearGameboard();
        displayController.createGameboard(playRound);
        displayController.addListenerToStartRestartBtn(startRestartGame)
    }

    return {initGame}
})();

game.initGame();