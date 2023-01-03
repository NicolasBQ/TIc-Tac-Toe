import { winCases } from "./winCases.js";
import { winner } from "./winner.js"; 

let x = 0;
let t = 0;
let o = 0;


const checkWinner = (round, endGame, board, boardR, roundT) => {
    const xScoreContainer = document.querySelector('[data-playerx-score]');
    const tieScoreContainer = document.querySelector('[data-tie-score]');
    const oScoreContainer = document.querySelector('[data-playero-score]');
    const boardFields = Array.from(document.querySelectorAll('[data-board-field]'));


    if(round == 9 && !endGame)  {
        t++
        setTimeout(() => {
            board.resetBoard(boardFields);
        }, 1000);
        tieScoreContainer.innerText = t;
        winner(boardFields, 'N', []);
    }

    if(round <= 9 && endGame) {
        let winIndexes = winCases(boardR).winIndexes;

        setTimeout(() => {
            board.resetBoard(boardFields);
        }, 1000);

        if(roundT == 'X') {
            x++;
            xScoreContainer.innerText = x;
        }

        if(roundT == 'O') {
            o++;
            oScoreContainer.innerText = o;
        }

        winner(boardFields, roundT, winIndexes);
    }

    const resetScores = () => {
        x = 0;
        t = 0;
        o = 0;
        xScoreContainer.innerText = x;
        tieScoreContainer.innerText = t;
        oScoreContainer.innerText = o;
    }


    return {
        resetScores,
    }
}




export { checkWinner }