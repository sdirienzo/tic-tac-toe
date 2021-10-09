const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
}

const gameBoard = (() => {
    const gameboardContainer = document.getElementsByClassName("gameboard-container")[0];

    let gameboard = [];

    const getGameboard = () => gameboard;

    const createGameboard = () => {
        for (let index = 0; index < 9; index++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("cell");
            gameboardContainer.appendChild(newDiv);
        }
    };
    
    const emptyGameboardArray = () => {
        while (gameboard.length > 0) {
            gameboard.pop();
        }
    };

    const clearGameboard = () => {
        while (gameboardContainer.firstChild) {
            gameboardContainer.removeChild(gameboardContainer.firstChild);
        }
        emptyGameboardArray();
    };

    const isPositionFree = position => {
        return !gameboard[position];
    };

    const addToBoard = (position, marker) => {
        gameboard[position] = marker;
    };
    return {getGameboard, createGameboard, clearGameboard, isPositionFree, addToBoard}
})();

gameBoard.createGameboard();