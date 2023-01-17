let count = 1;

const mediumAlgo = (board) => {
    if(count % 2 != 0) {
        console.log('MIN MAXX');
        count++;
    } else {
        let emptyFields = [];
    
        for(let i = 0; i < board.length; i++) {
            if(!board[i]) {
                emptyFields.push(i);
            }
        }
        
    
        let index = emptyFields[Math.floor(Math.random() * emptyFields.length)];
    
        return index;
    }
}

export { mediumAlgo }