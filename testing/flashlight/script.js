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
    const toggle = document.querySelector('.blacklightToggle')
    const body = document.querySelector('body')
    toggle.addEventListener('click', () => {
        body.classList.toggle('blacklightActive')
    })
}