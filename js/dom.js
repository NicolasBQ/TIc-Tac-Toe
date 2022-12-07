const dom = () => {
    const main = document.querySelector('[data-main]');
    const btnPvp = document.querySelector('[data-btn-pvp]');
    const btnPve = document.querySelector('[data-btn-pve]');
    const home = document.querySelector('[data-home-icon]');
    const menuContainer = document.querySelector('[data-main-menu]')
    const pvpNameContainer = document.querySelector('[data-pvpName-container]');
    const pveDifficultyContainer = document.querySelector('[data-pveDifficulty-container]');


    return {
        main,
        btnPvp,
        btnPve,
        home,
        menuContainer,
        pvpNameContainer,
        pveDifficultyContainer
    }
}


export { dom }