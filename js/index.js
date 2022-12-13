import { dom } from './dom.js';

const appInit = () => {
    events();
}

const events = () => {
    const elements = dom();

    elements.forEach(element => {
        let dom = element.domElement;
        if(dom) {
            dom.addEventListener(element.event, () => {
                element.method();
            });
        }
    })
}


document.addEventListener('DOMContentLoaded', appInit);