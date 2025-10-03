document.addEventListener('DOMContentLoaded', () => {
    setupFlashlight()
    setupBlacklight()
})

function setupFlashlight() {
    const flashlight = document.getElementById('flashlight')
    document.addEventListener('mousemove', (event) => {
        flashlight.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`
    })
}

function setupBlacklight() {
    const body = document.querySelector('body')
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault()
        body.classList.toggle('blacklightActive')
    })
}