import { dom } from './dom.js';
import { moveLeft, homeIcon } from './ui.js';


const appInit = () => {
    const {
        main,
        btnPvp,
        btnPve,
        home,
        menuContainer,
        pvpNameContainer,
        pveDifficultyContainer
    } = dom();


    btnPvp.addEventListener('click', () => {
        moveLeft(menuContainer, pvpNameContainer);
        homeIcon(true, home);
    })
    
    btnPve.addEventListener('click', () => {
        moveLeft(menuContainer, pveDifficultyContainer);
        homeIcon(true, home);
    })

    // home.addEventListener('click', () => {
    //     homeIcon('false', home);
    // })
}


document.addEventListener('DOMContentLoaded', appInit);