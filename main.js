const button = document.querySelector('#grid-size');
button.addEventListener('click', (e) => {
    let size = prompt("Enter the new grid size between 1 and 100:");
    if (isNaN(size) || size < 1 || size > 100) {
        alert("You did not enter a valid integer (1-100). 16 will be used as the default.");
        size = 16;
    }
    createGrid(size);
})

createGrid(16);

function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseenter', (e) => {
            cell.style.backgroundColor = "orange";
        })
        cell.addEventListener('mouseleave', (e) => {
            cell.style.backgroundColor = "transparent";
        })
        container.appendChild(cell);
    }
}