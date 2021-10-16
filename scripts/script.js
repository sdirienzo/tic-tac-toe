const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
}

const gameBoard = (() => {
    let gameboard = [];

    const getGameboard = () => gameboard;

    // const createGameboard = (gameboardContainer, nodeClass) => {
    //     for (let index = 0; index < 9; index++) {
    //         let newDiv = document.createElement("div");
    //         newDiv.classList.add(`${nodeClass}`);
    //         gameboardContainer.appendChild(newDiv);
    //     }
    // };
    
    const emptyGameboard = () => {
        while (gameboard.length > 0) {
            gameboard.pop();
        }
    };

    // const clearGameboard = (gameboardContainer) => {
    //     while (gameboardContainer.firstChild) {
    //         gameboardContainer.removeChild(gameboardContainer.firstChild);
    //     }
    //     emptyGameboard();
    // };

    const isPositionFree = (position) => {
        return !gameboard[position];
    };

    const addToGameboard = (position, marker) => {
        gameboard[position] = marker;
    };

    // const addMarkerToGameboard = (node, position, marker) => {
    //     node.innerText = marker;
    //     addToGameboard(position, marker);
    // };
    return {getGameboard, emptyGameboard, isPositionFree, addToGameboard}
})();

const displayController = (() => {
    const gameboardContainer = document.getElementsByClassName("gameboard-container")[0];
    const startRestartBtn = document.getElementById("start-restart-btn");

    const addMarkerToGameboard = (index, marker) => {
        gameboardContainer[index].innerText = marker;
    };

    //TODO: add callback function
    const createGameboard = () => {
        for (let index = 0; index < 9; index++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("cell");
            newDiv.addEventListener("click", )
            gameboardContainer.appendChild(newDiv);
        }
    };

    const clearGameboard = () => {
        while (gameboardContainer.firstChild) {
            gameboardContainer.removeChild(gameboardContainer.firstChild);
        }
    };
    

})();

// gameBoard.createGameboard();