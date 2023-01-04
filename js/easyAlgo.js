const easyAlgo = (board) => {
    let emptyFields = [];
    
    for(let i = 0; i < board.length; i++) {
        if(!board[i]) {
            emptyFields.push(i);
        }
    }
    

    let index = emptyFields[Math.floor(Math.random() * emptyFields.length)];

    return index;
}


export { easyAlgo }