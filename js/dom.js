import { 
    btnPvpFunction,
    btnPveFunction,
    easyBtnFunction,
    mediumBtnFunction,
    impossibleBtnFunction,
    nameXFunction,
    nameOFunction,
    nameRestrictions,
    startBtnFunction

 } from './domFunctions.js';

const dom = () => {
    const btnPvp = {
        domElement: document.querySelector('[data-btn-pvp]'),
        event: 'click',
        method: function() {
            btnPvpFunction();
        }
    }

    const btnPve = {
        domElement: document.querySelector('[data-btn-pve]'),
        event: 'click',
        method: function() {
            btnPveFunction();
        }
    }

    const easyBtn = {
        domElement: document.querySelector('[data-easy-btn]'),
        event: 'click',
        method: function() {
            easyBtnFunction();
        }
    }

    const mediumBtn = {
        domElement: document.querySelector('[data-medium-btn]'),
        event: 'click',
        method: function() {
            mediumBtnFunction();
        }
    }

    const impossibleBtn = {
        domElement: document.querySelector('[data-impossible-btn]'),
        event: 'click',
        method: function() {
            impossibleBtnFunction();
        }
    }

    const nameX = {
        domElement: document.querySelector('[data-name-x]'),
        event: 'click',
        method: function() {
            nameXFunction(this.domElement);
        }
    } 

    const nameO = {
        domElement: document.querySelector('[data-name-o]'),
        event: 'click',
        method: function() {
            nameOFunction(this.domElement);
        }
    }

    const startBtn = {
        domElement: document.querySelector('[data-start-btn]'),
        event: 'click',
        method: function() {
            startBtnFunction();
        }
    }

    const inputX = {
        domElement: document.querySelector('[data-input-x]'),
        event: 'input',
        method: function() {
            nameRestrictions();
        }
    }

    const inputO = {
        domElement: document.querySelector('[data-input-o]'),
        event: 'input',
        method: function() {
            nameRestrictions();
        }
    }


    return [
        btnPvp,
        btnPve,
        easyBtn,
        mediumBtn,
        impossibleBtn,
        nameX,
        nameO,
        startBtn,
        inputX,
        inputO
    ]
}




export { dom }