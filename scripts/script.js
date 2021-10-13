const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
}

const gameBoard = (() => {
    let gameboard = [];

    const getGameboard = () => gameboard;

    const createGameboard = (gameboardContainer, nodeClass) => {
        for (let index = 0; index < 9; index++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add(`${nodeClass}`);
            gameboardContainer.appendChild(newDiv);
        }
    };
    
    const emptyGameboard = () => {
        while (gameboard.length > 0) {
            gameboard.pop();
        }
    };

    const clearGameboard = (gameboardContainer) => {
        while (gameboardContainer.firstChild) {
            gameboardContainer.removeChild(gameboardContainer.firstChild);
        }
        emptyGameboard();
    };

    const isPositionFree = position => {
        return !gameboard[position];
    };

    const addToGameboard = (position, marker) => {
        gameboard[position] = marker;
    };

    const addMarkerToGameboard = (node, position, marker) => {
        node.innerText = marker;
        addToGameboard(position, marker);
    };
    return {getGameboard, createGameboard, clearGameboard, isPositionFree, addMarkerToGameboard}
})();

// gameBoard.createGameboard();