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



export {
    boardArr
}