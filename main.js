let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup= () => (mouseDown = false);

createGrid(16);

const button = document.querySelector('#grid-size');
button.addEventListener('click', (e) => {
    let size = prompt("Enter the new grid size between 1 and 100:");
    if (isNaN(size) || size < 1 || size > 100) {
        alert("You did not enter a valid integer (1-100). 16 will be used as the default.");
        size = 16;
    }
    createGrid(size);
})

function createGrid(size) {
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', (e) => { 
            cell.style.border = '2px solid #2b6777';
            changeColor(e);
        })
        cell.addEventListener('mousedown', changeColor);
        cell.addEventListener('mouseleave', (e) => { cell.style.border = 'none'; })
        grid.appendChild(cell);
    }
}

function changeColor(e) {
    console.log(e.type);
    if (mouseDown || e.type === 'mousedown') {
        e.target.style.backgroundColor = 'black';
    } 
}