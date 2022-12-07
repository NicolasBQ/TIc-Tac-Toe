const moveLeft = (oldContainer, newContainer)  => {
    oldContainer.classList.add('left-out');
    oldContainer.classList.add('fixed');
    oldContainer.classList.remove('absolute');

    newContainer.classList.add('left-in');
    newContainer.classList.add('absolute');
    newContainer.classList.remove('next-container');
    newContainer.classList.remove('fixed');
}

const homeIcon = (value, icon) => {
    if(value) {
        icon.classList.remove('d-none');
        icon.classList.add('d-block');
    } else {
        icon.classList.remove('d-block');
        icon.classList.add('d-none');
    }
}

// const backHome = (main) => {
//     const mainNodes = 
// }

const moveRight = () => {

}

export {
    moveLeft,
    homeIcon
}