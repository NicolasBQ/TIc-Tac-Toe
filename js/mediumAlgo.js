import { minmax } from "./minmax.js";
import { easyAlgo } from "./easyAlgo.js";

let count = 0;

const mediumAlgo = (board) => {
    let index;

    if(count % 2 == 0) {
        index = minmax(board, 'O').index;
        count++;
    } else {
        index = easyAlgo(board);
        count++;
    }

    return index;
}


const resetCount = () => {
    count = 0;
}

export { mediumAlgo, resetCount }