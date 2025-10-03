document.addEventListener('DOMContentLoaded', () => {
    const flashlight = document.getElementById('flashlight')
    document.addEventListener('mousemove', (event) => {
        flashlight.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`
    })
})