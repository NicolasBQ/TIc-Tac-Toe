import { winCases } from "./winCases.js";
import { boardArr } from "./boardArr.js";
import { checkWinner } from "./checkWinner.js";
import { easyAlgo } from "./easyAlgo.js";

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
    const mode = getVariables().mode;
    let endGame = false;


    const resetGame = () => {
        round = 0;
        checkWinner().resetScores();
        board.resetBoard(boardFields);
    }

    if(mode === 'pve') {
        round++;
        let cpu;
        let difficulty = getVariables().difficulty;
        let roundT = roundTurn(round);
        let index;
        if(getVariables().playerX === 'Alexandra') {
            cpu = 'X'
        }

        if(getVariables().playerO === 'Alexandra') {
            cpu = 'O';
        }

        if(roundT === cpu) {
            index = cpuAlgorithm(difficulty, board)
            console.log(index);
            board.addSign(roundT, index);
            board.drawSign(roundT, boardFields[index]);
        }
    }


    boardFields.forEach((field, index) => {
        field.addEventListener('click', () => {
            if(field.textContent != '') return;
            round++;
            if(mode == 'pvp') {
                let roundT = roundTurn(round);
                board.addSign(roundT, index);
                board.drawSign(roundT, field);
                let boardR = board.getBoard();
                endGame = winCases(boardR).endGame;
            }

   
            checkWinner(round, endGame, board, boardR, roundT);
            if(round == 9 || endGame) {
                round = 0;
            }
        })
    })

  
    btnRestart.addEventListener('click', resetGame);
}



const cpuAlgorithm = (difficulty, board) => {
    let index;
    if(difficulty === 'easy') {
        index = easyAlgo();
    }

    if(difficulty === 'medium') {
        mediumAlgo();
    }

    if(difficulty === 'impossible') {
        impossibleAlgo();
    }

    return index
}








document.addEventListener('DOMContentLoaded', board_handler);