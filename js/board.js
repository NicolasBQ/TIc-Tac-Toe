const board_handler = () =>{ 
    showData();
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


document.addEventListener('DOMContentLoaded', board_handler);