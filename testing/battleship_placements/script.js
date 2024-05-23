document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    let currentHoveredCells = [];

    // Create 10x10 grid
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.dataset.index = i;
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', drop);
        gridContainer.appendChild(cell);
    }

    const ships = document.querySelectorAll('.ship');
    ships.forEach(ship => {
        ship.addEventListener('dragstart', dragStart);
        ship.style.width = `${ship.dataset.length * 40}px`;
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
        const targetCell = e.target;

        // Reset the background color of previously hovered cells
        currentHoveredCells.forEach(cell => cell.style.backgroundColor = '');
        currentHoveredCells = [];

        const shipId = e.dataTransfer.getData('text/plain');
        const ship = document.getElementById(shipId);
        const shipLength = parseInt(ship.dataset.length);
        const startIndex = parseInt(targetCell.dataset.index);

        // Highlight cells based on ship length
        for (let i = 0; i < shipLength; i++) {
            const cellIndex = startIndex + i;
            if (cellIndex % 10 < startIndex % 10 || cellIndex >= 100) {
                break; // Stop if the ship goes out of bounds
            }
            const cell = document.querySelector(`.grid-cell[data-index="${cellIndex}"]`);
            if (cell) {
                cell.style.backgroundColor = 'grey';
                currentHoveredCells.push(cell);
            }
        }
    }

    function dragLeave(e) {
        // Reset the background color of previously hovered cells
        currentHoveredCells.forEach(cell => cell.style.backgroundColor = '');
        currentHoveredCells = [];
    }

    function drop(e) {
        e.preventDefault();
        // Reset the background color of previously hovered cells
        currentHoveredCells.forEach(cell => cell.style.backgroundColor = '');
        currentHoveredCells = [];

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
        //ship.draggable = false; // Disable further dragging once placed
    }
});
