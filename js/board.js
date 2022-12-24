const board_handler = () =>{ 
    showData();
    domInteraction();
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


const boardArr = () => {
    let board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    let turnDom = document.querySelector('[data-turn]');
    const addSign = (sign, i) => {
        board[i] = sign;
        
    };

    const drawSign = (sign, element) => {
        
        element.innerText = sign;
        
        if(sign == 'X') {
            element.classList.remove('accent-o');
            element.classList.add('accent-x');
            turnDom.innerText = 'O';
        } 
        if(sign == 'O') {
            element.classList.remove('accent-x');
            element.classList.add('accent-o');
            turnDom.innerText = 'X';
        }
    }


    
    const getBoard = () => {
        return board;
    }

    const resetBoard = (elements) => {
        board = board.map(field => field = '');
        elements.forEach(element =>  {
            element.innerText = '';
            element.classList.remove('p-none');
            element.classList.remove('bg-x');
            element.classList.remove('bg-o');
            element.classList.remove('bg-gray');
            element.classList.remove('dblue');
            element.classList.add('bg-lblue');
        });
        turnDom.innerText = 'X';
    }


    return {
        addSign,
        drawSign,
        resetBoard,
        getBoard
    }
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

const domInteraction = () => {
    let round = 0;
    const boardFields = Array.from(document.querySelectorAll('[data-board-field]'));
    const btnRestart = document.querySelector('[data-btn-restart]');
    const xScoreContainer = document.querySelector('[data-playerx-score]');
    const tieScoreContainer = document.querySelector('[data-tie-score]');
    const oScoreContainer = document.querySelector('[data-playero-score]');
    const board = boardArr();
    x = 0;
    t = 0;
    o = 0;

    boardFields.forEach((field, index) => {
        field.addEventListener('click', () => {
            if(field.textContent != '') return;
            round++;
            let roundT = roundTurn(round);
            board.addSign(roundT, index);
            board.drawSign(roundT, field);
            let boardR = board.getBoard();
            let endGame = winCases(boardR).endGame;

            if(round == 9 && !endGame)  {
                round = 0;
                t++;
                setTimeout(() => {
                    board.resetBoard(boardFields);
                }, 1000);
                tieScoreContainer.innerText = t;
                winner(boardFields, 'N', []);
            }

            if(round <= 9 && endGame) {
                round = 0;
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
        })
    })

    btnRestart.addEventListener('click', () => {
        round = 0;
        x = 0;
        t = 0;
        o = 0;
        xScoreContainer.innerText = x;
        tieScoreContainer.innerText = t;
        oScoreContainer.innerText = o;
        board.resetBoard(boardFields);
    })
}

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

const winner = (elements, sign, winIndexes) => {
    elements.forEach(element => {
        element.classList.add('p-none');
    })

    if(winIndexes.length > 0) {
        for(let i = 0; i < winIndexes.length; i++) {
            elements[winIndexes[i]].classList.remove('bg-lblue');
            elements[winIndexes[i]].classList.add('dblue');
            if(sign === 'X') {
                elements[winIndexes[i]].classList.add('bg-x');
            }
    
            if(sign === 'O') {
                elements[winIndexes[i]].classList.add('bg-o');
            }
        }
    } else {
        elements.forEach(element => {
            element.classList.remove('bg-lblue');
            element.classList.add('bg-gray');
            element.classList.add('dblue');
        })
    }
}











document.addEventListener('DOMContentLoaded', board_handler);