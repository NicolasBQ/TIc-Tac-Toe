import { minmax } from "./minmax.js";

const impossibleAlgo = (board) => {
    let index = minmax(board, 'O').index;

    return index;
}





export { impossibleAlgo }