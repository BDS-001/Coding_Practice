// script.js

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');

    // Create 10x10 grid
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.dataset.index = i;
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('drop', drop);
        gridContainer.appendChild(cell);
    }

    const ships = document.querySelectorAll('.ship');
    ships.forEach(ship => {
        ship.addEventListener('dragstart', dragStart);
        ship.style.width = `${ship.dataset.length * 40}px`;
    });
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const shipId = e.dataTransfer.getData('text/plain');
    const ship = document.getElementById(shipId);
    const dropCell = e.target;
    const startIndex = parseInt(dropCell.dataset.index);

    // Check if ship can be placed within the grid bounds
    const shipLength = parseInt(ship.dataset.length);
    if (startIndex % 10 + shipLength > 10) {
        return; // Do not allow placement that exceeds grid bounds
    }

    // Check if ship overlaps with existing ships
    for (let i = 0; i < shipLength; i++) {
        const cell = document.querySelector(`.grid-cell[data-index="${startIndex + i}"]`);
        if (cell.classList.contains('occupied')) {
            return; // Do not allow placement on occupied cells
        }
    }

    // Place ship
    for (let i = 0; i < shipLength; i++) {
        const cell = document.querySelector(`.grid-cell[data-index="${startIndex + i}"]`);
        cell.classList.add('occupied');
    }
    ship.style.position = 'absolute';
    ship.style.left = `${dropCell.getBoundingClientRect().left}px`;
    ship.style.top = `${dropCell.getBoundingClientRect().top}px`;
    ship.draggable = false; // Disable further dragging once placed
}
