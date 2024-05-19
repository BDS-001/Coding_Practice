const draggableElement = document.getElementById('draggableElement');
const dropZones = document.querySelectorAll('.drop-zone');

// Define the dragstart event handler
draggableElement.addEventListener('dragstart', (event) => {
    // Set the data and type of the dragged item
    event.dataTransfer.setData('text/plain', 'Dragged Element');
});

// Define the dragover event handler to allow a drop
document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

// Define the drop event handler
document.addEventListener('drop', (event) => {
    event.preventDefault();
    // Get the data transferred
    const data = event.dataTransfer.getData('text/plain');
    // Create a new element and append it to the drop location
    const droppedElement = document.createElement('div');
    droppedElement.textContent = data;
    event.target.appendChild(droppedElement);
});

// Define the dragenter and dragleave event handlers for drop zones
dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragenter', (event) => {
        event.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', (event) => {
        dropZone.classList.remove('drag-over');
    });

    // Define the drop event handler for drop zones
    dropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        const droppedElement = document.createElement('div');
        droppedElement.textContent = data;
        dropZone.appendChild(droppedElement);
        dropZone.classList.remove('drag-over');
    });
});
