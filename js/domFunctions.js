const btnPvpFunction = () => {
    localStorage.setItem('mode', 'pvp');
    document.location.href = './names.html';
}

const btnPveFunction = () => {
    localStorage.setItem('mode', 'pve');
    document.location.href = './levels.html';
}

const easyBtnFunction = () => {
    localStorage.setItem('difficulty', 'easy');
    document.location.href = './names.html';
}

const mediumBtnFunction = () => {
    localStorage.setItem('difficulty', 'medium');
    document.location.href = './names.html';
}

const impossibleBtnFunction = () => {
    localStorage.setItem('difficulty', 'impossible');
    document.location.href = './names.html';
}

const nameXFunction = function(domElement) {
    const element = domElement;
    const elementChild = element.firstElementChild;
    const oContainer = element.nextElementSibling;
    const siblingChild = oContainer.firstElementChild;
    const inputX = document.querySelector('[data-input-x]');
    const inputO = document.querySelector('[data-input-o]');
    const player = document.querySelector('[data-player]');

    oContainer.classList.remove('bg-o');
    element.classList.add('bg-x');
    elementChild.classList.add('dblue');
    elementChild.classList.remove('gray');
    siblingChild.classList.add('gray');
    siblingChild.classList.remove('dblue');
    inputX.classList.add('d-block');
    inputX.classList.remove('d-none');
    inputO.classList.add('d-none');
    inputO.classList.remove('d-block');
    player.classList.add('accent-x');
    player.classList.remove('accent-o');
    player.innerHTML = 'X';
}


const nameOFunction = function(domElement) {
    const element = domElement;
    const elementChild = element.firstElementChild;
    const xContainer = element.previousElementSibling;
    const siblingChild = xContainer.firstElementChild;
    const inputX = document.querySelector('[data-input-x]');
    const inputO = document.querySelector('[data-input-o]');
    const player = document.querySelector('[data-player]');

    xContainer.classList.remove('bg-x');
    element.classList.add('bg-o');
    elementChild.classList.add('dblue');
    elementChild.classList.remove('gray');
    siblingChild.classList.add('gray');
    siblingChild.classList.remove('dblue');
    inputO.classList.add('d-block');
    inputO.classList.remove('d-none');
    inputX.classList.add('d-none');
    inputX.classList.remove('d-block');
    player.classList.add('accent-o');
    player.classList.remove('accent-x');
    player.innerHTML = 'O';
}

const nameRestrictions = () => {
    const inputX = document.querySelector('[data-input-x]');
    let inputXVal = inputX.value;
    const inputO = document.querySelector('[data-input-o]');
    let inputOVal = inputO.value;
    const startBtn = document.querySelector('[data-start-btn]');

    const gameMode = localStorage.getItem('mode');

    if(gameMode == 'pvp') {
        if(inputXVal.length > 0 && inputOVal.length > 0)  {
            startBtn.classList.add('btn-allow');
            startBtn.classList.add('bg-green');
            startBtn.classList.remove('btn-block');
            startBtn.classList.remove('gray');
        } else {
            startBtn.classList.remove('btn-allow');
            startBtn.classList.remove('bg-green');
            startBtn.classList.add('btn-block');
            startBtn.classList.add('gray');
        }
    }

    if(gameMode == 'pve') {
        if(inputXVal.length > 0) {
            startBtn.classList.add('btn-allow');
            startBtn.classList.add('bg-green');
            startBtn.classList.remove('btn-block');
            startBtn.classList.remove('gray');
            inputX.classList.remove('p-none');
            inputO.classList.add('p-none');
            inputO.placeholder = 'Alexandra';
        } else if(inputOVal.length > 0) {
            startBtn.classList.add('btn-allow');
            startBtn.classList.add('bg-green');
            startBtn.classList.remove('btn-block');
            startBtn.classList.remove('gray');
            inputO.classList.remove('p-none');
            inputX.classList.add('p-none');
            inputX.placeholder = 'Alexandra';
        } else {
            startBtn.classList.remove('btn-allow');
            startBtn.classList.remove('bg-green');
            startBtn.classList.add('btn-block');
            startBtn.classList.add('gray');
            inputX.classList.remove('p-none');
            inputO.classList.remove('p-none');
            inputO.placeholder = '';
            inputX.placeholder = '';
        }

    }
}

const startBtnFunction = () => {
    document.location.href = './board.html';
}

export {
    btnPvpFunction,
    btnPveFunction,
    easyBtnFunction,
    mediumBtnFunction,
    impossibleBtnFunction,
    nameXFunction,
    nameOFunction,
    nameRestrictions,
    startBtnFunction
}