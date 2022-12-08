import { dom } from './dom.js';

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
  
    // home.addEventListener('click', () => {
    //     homeIcon('false', home);
    // })
}


document.addEventListener('DOMContentLoaded', appInit);