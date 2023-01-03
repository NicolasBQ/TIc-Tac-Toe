const winCases = (board) => {
    let endGame = false;
    let winIndexes = [];
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i = 0; i < combs.length; i++) {
        endGame = board[combs[i][0]] !== '' && board[combs[i][0]] === board[combs[i][1]] && board[combs[i][1]] !== '' && board[combs[i][1]] === board[combs[i][2]] && board[combs[i][2]] != '';

        if(endGame) {
            winIndexes.push(combs[i][0]);
            winIndexes.push(combs[i][1]);
            winIndexes.push(combs[i][2]);

            break;
        }
    }

    return {
        endGame,
        winIndexes
    }
}


export { winCases }