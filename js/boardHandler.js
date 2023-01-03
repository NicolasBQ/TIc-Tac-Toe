import { winCases } from "./winCases.js";
import { boardArr } from "./boardArr.js";
import { checkWinner } from "./checkWinner.js";

const board_handler = () =>{ 
    showData();
    gameInteraction();
}


const getVariables = () => {
    const playerX = localStorage.getItem('playerX');
    const playerO = localStorage.getItem('playerO');
    const mode = localStorage.getItem('mode');
    const difficulty = localStorage.getItem('difficulty');

    return {
        playerX,
        playerO,
        mode,
        difficulty
    }
}


const showData = () => {
    const { playerX, playerO } = getVariables();
    const xContainer = document.querySelector('[data-playerx-name]');
    const oContainer = document.querySelector('[data-playero-name]');

    xContainer.innerText = playerX;
    oContainer.innerText = playerO;

}

const roundTurn = (n) => {
    let sign;

    if(n % 2 != 0) {
        sign = 'X';
    } else {
        sign = 'O';
    }

    return sign;
}

const gameInteraction = () => {
    let round = 0;
    const boardFields = Array.from(document.querySelectorAll('[data-board-field]'));
    const btnRestart = document.querySelector('[data-btn-restart]'); 
    const board = boardArr();


    const resetGame = () => {
        round = 0;
        checkWinner().resetScores();
        board.resetBoard(boardFields);
    }



    boardFields.forEach((field, index) => {
        field.addEventListener('click', () => {
            if(field.textContent != '') return;
            round++;
            let roundT = roundTurn(round);
            board.addSign(roundT, index);
            board.drawSign(roundT, field);
            let boardR = board.getBoard();
            let endGame = winCases(boardR).endGame;

          
            checkWinner(round, endGame, board, boardR, roundT);
            if(round == 9 || endGame) {
                round = 0;
            }
        })
    })

  

    btnRestart.addEventListener('click', resetGame);
}








document.addEventListener('DOMContentLoaded', board_handler);