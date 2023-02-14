import { winCases } from "./winCases.js";

const minmax = (newBoard, player) => {
    // Add one to function calls
    // available spots 
    let availableSpots = []

    for(let i = 0; i < newBoard.length; i++) {
        if(newBoard[i] != 'X' && newBoard[i] != 'O') {
            availableSpots.push(i);
        }
    }

    let endGame = winCases(newBoard).endGame;

    if(endGame && player == 'X') {
        return { score: 10 }
    } else if(endGame && player == 'O') {
        return { score: -10 }
    } else if(availableSpots.length === 0) {
        return { score: 0 }
    }


    // Array to collect all the objects
    let moves = [];

    // Loop through available spots
    for(let i = 0; i < availableSpots.length; i++) {
        // For each available spot create an object
        // Store the index of that spot in each object
        let move = {};
        move.index = availableSpots[i];

        // Set the empty sport to the current player
        newBoard[availableSpots[i]] = player;


        // Get the score of the call
        if(player == 'O') {
            let result = minmax(newBoard, 'X').score;
            move.score = result;
        } else {
            let result = minmax(newBoard, 'O').score;
            move.score = result;
        }

        // Reset the spot to empty
        newBoard[availableSpots[i]] = '';

        // Save the move in moves array
        moves.push(move);
    }

    // if CPU's loop finish, choose the move with the greates score
    let bestMove;
    if(player == 'O') {
        let bestScore = -10000;

        for(let i = 0; i < moves.length; i++) {
            if(moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        // Else, if the player's loop finish, choose the move with the lowest score
        let bestScore = 10000;

        for(let i = 0; i < moves.length; i++) {
            if(moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    
    return moves[bestMove];
}

export { minmax }