const dom = () => {
    const btnPvp = {
        domElement: document.querySelector('[data-btn-pvp]'),
        method: function() {
            localStorage.setItem('mode', 'pvp');
            document.location.href = './names.html';
        }
    }

    const btnPve = {
        domElement: document.querySelector('[data-btn-pve]'),
        method: function() {
            localStorage.setItem('mode', 'pve');
            document.location.href = './levels.html';
        }
    } 
    const nameX = {
        domElement: document.querySelector('[data-name-x]'),
        method: function() {
            const element = this.domElement;
            const elementChild = element.firstElementChild;
            const oContainer = element.nextElementSibling;
            const siblingChild = oContainer.firstElementChild;
            const inputX = document.querySelector('[data-input-x]');
            const inputO = document.querySelector('[data-input-o]');
            const player = document.querySelector('[data-player]');

            oContainer.classList.remove('bg-o');
            element.classList.add('bg-x');
            elementChild.classList.add('dblue');
            elementChild.classList.remove('gray');
            siblingChild.classList.add('gray');
            siblingChild.classList.remove('dblue');
            inputX.classList.add('d-block');
            inputX.classList.remove('d-none');
            inputO.classList.add('d-none');
            inputO.classList.remove('d-block');
            player.classList.add('accent-x');
            player.classList.remove('accent-o');
            player.innerHTML = 'X';
        }
    } 
    const nameO = {
        domElement: document.querySelector('[data-name-o]'),
        method: function() {
            const element = this.domElement;
            const elementChild = element.firstElementChild;
            const xContainer = element.previousElementSibling;
            const siblingChild = xContainer.firstElementChild;
            const inputX = document.querySelector('[data-input-x]');
            const inputO = document.querySelector('[data-input-o]');
            const player = document.querySelector('[data-player]');

            xContainer.classList.remove('bg-x');
            element.classList.add('bg-o');
            elementChild.classList.add('dblue');
            elementChild.classList.remove('gray');
            siblingChild.classList.add('gray');
            siblingChild.classList.remove('dblue');
            inputO.classList.add('d-block');
            inputO.classList.remove('d-none');
            inputX.classList.add('d-none');
            inputX.classList.remove('d-block');
            player.classList.add('accent-o');
            player.classList.remove('accent-x');
            player.innerHTML = 'O';
        }
    } 

    return [
        btnPvp,
        btnPve,
        nameX,
        nameO
    ]
}




export { dom }