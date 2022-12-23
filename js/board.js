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
    const xScoreContainer = document.querySelector('[data-playerx-score]');
    const tieScoreContainer = document.querySelector('[data-tie-score]');
    const oScoreContainer = document.querySelector('[data-playero-score]')

    xContainer.innerText = playerX;
    oContainer.innerText = playerO;

    xScoreContainer.innerText = scores().getXScore();
    tieScoreContainer.innerText = scores().getTieScore();
    oScoreContainer.innerText = scores().getOScore();

}

const scores = () => {
    let xScore = 0;
    let oScore = 0;
    let tieScore = 0;

    const addXScore = () => {
        xScore++;
    }

    const addOScore = () => {
        oScore++;
    }

    const addTieScore = () => {
        tieScore++;
    }

    const getXScore = () => {
        return xScore;
    }

    const getOScore = () => {
        return oScore;
    }

    const getTieScore = () => {
        return tieScore;
    }

    return {
        addXScore,
        addTieScore,
        addOScore,
        getXScore,
        getOScore,
        getTieScore
    }
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

    const resetBoard = (elements, round) => {
        board = board.map(field => field = '');
        elements.forEach(element => element.innerText = '');
        turnDom.innerText = 'X';
        board_handler();
    }

    return {
        addSign,
        drawSign,
        resetBoard
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
    let btnRestart = document.querySelector('[data-btn-restart]');
    const board = boardArr();
    boardFields.forEach((field, index) => {
        field.addEventListener('click', () => {
            if(field.textContent != '') return;
            round++;
            let roundT = roundTurn(round);
            board.addSign(roundT, index);
            board.drawSign(roundT, field);
        })
    })

    btnRestart.addEventListener('click', () => {
        round = 0;
        board.resetBoard(boardFields, round);
    })
}






document.addEventListener('DOMContentLoaded', board_handler);