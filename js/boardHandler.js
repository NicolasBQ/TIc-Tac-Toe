import { winCases } from "./winCases.js";
import { boardArr } from "./boardArr.js";
import { checkWinner } from "./checkWinner.js";
import { easyAlgo } from "./easyAlgo.js";
import { mediumAlgo } from "./mediumAlgo.js";

const boardHandler = () =>{ 
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

const boardDom = () => {
    const boardFields = Array.from(document.querySelectorAll('[data-board-field]'));
    const btnRestart = document.querySelector('[data-btn-restart]'); 

    return {
        boardFields,
        btnRestart
    }
}


const showData = () => {
    const { playerX, playerO } = getVariables();
    const xContainer = document.querySelector('[data-playerx-name]');
    const oContainer = document.querySelector('[data-playero-name]');

    xContainer.innerText = playerX;
    oContainer.innerText = playerO;

}

const resetGame = (board) => {
    let round = 0;
    let boardFields = boardDom().boardFields
    checkWinner().resetScores();
    board.resetBoard(boardFields);

    return { round } 
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
    const boardFields = boardDom().boardFields;
    const btnRestart = boardDom().btnRestart;
    const board = boardArr();
    const mode = getVariables().mode;
    let endGame = false;

    if(mode === 'pve') {
        pveInteraction();
        return;
    }


    boardFields.forEach((field, index) => {
        field.addEventListener('click', () => {
            if(field.textContent != '') return;
            round++;
            
            let roundT = roundTurn(round);
            board.addSign(roundT, index);
            board.drawSign(roundT, field);
            let boardR = board.getBoard();
            endGame = winCases(boardR).endGame;
            

   
            checkWinner(round, endGame, board, boardR, roundT);
            if(round == 9 || endGame) {
                round = 0;
            }
        })
    })

  
    btnRestart.addEventListener('click', () => {
        let resetG = resetGame(board);
        round = resetG.round;
    });
}

const pveInteraction = () => {
    let round = 0;
    const boardFields = boardDom().boardFields;
    const btnRestart = boardDom().btnRestart;
    let difficulty = getVariables().difficulty;
    let roundT;
    let index;
    let board = boardArr();
    let boardR = board.getBoard();
    let endGame = false;


    const cpuTurn = () => {
        round++;
        roundT = roundTurn(round);
        index = cpuAlgorithm(difficulty, boardR)
        board.addSign(roundT, index);
        board.drawSign(roundT, boardFields[index]);
        boardR = board.getBoard();
        endGame = winCases(boardR).endGame;
        
        checkWinner(round, endGame, board, boardR, roundT, 'pve');
        if(round == 9 || endGame) {
            round = 0;
        } else {
            playerTurn();
        }
    }

    const playerTurn = () => {
        boardFields.forEach((field, index) => {
            field.addEventListener('click', () => {
                if(field.textContent != '') return;
                round++;
                roundT = roundTurn(round);
                board.addSign(roundT, index);
                board.drawSign(roundT, field);
                boardR = board.getBoard();
                endGame = winCases(boardR).endGame;

                checkWinner(round, endGame, board, boardR, roundT, 'pve');
                if(round == 9 || endGame) {
                    round = 0;
                } else {
                    cpuTurn();
                }
            })
        })
    }

    if(getVariables().playerO === 'Alexandra') {
        playerTurn();
    }
    

    btnRestart.addEventListener('click', () => {
        let resetG = resetGame(board);
        round = resetG.round;
        
        if(getVariables().playerX === 'Alexandra') {
            cpuTurn();
        }
    
        if(getVariables().playerO === 'Alexandra') {
            playerTurn();
        }
    });
}

const cpuAlgorithm = (difficulty, board) => {
    let index;
    if(difficulty === 'easy') {
        index = easyAlgo(board);
    }

    if(difficulty === 'medium') {
        mediumAlgo();
    }

    if(difficulty === 'impossible') {
        impossibleAlgo();
    }

    return index
}


export {
    pveInteraction
}





document.addEventListener('DOMContentLoaded', boardHandler);