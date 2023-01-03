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


export { winner }