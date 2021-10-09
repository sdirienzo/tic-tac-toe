const Player = (name, marker) => {
    let name = name;
    let marker = marker;
    const getName = () => name;
    const getMarker = () => marker;
}

const gameBoard = (() => {
    let gameboard = [];

    const getGameboard = () => gameboard;

    const clearGameboard = () => {
        while (gameboard.length > 0) {
            gameboard.pop();
        }
    }

    const isPositionFree = position => {
        return !gameboard[position];
    };

    const addToBoard = (position, marker) => {
        gameboard[position] = marker;
    };
})();