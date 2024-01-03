const dropdownButton = document.getElementById('dropdownbtn')
const dropdownMenu = document.getElementById('dropdown-menu')

function showMenu() {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
        dropdownMenu.style.opacity = 0;
        dropdownMenu.style.transform = "translateY(-20px)";
    } else {
        dropdownMenu.style.display = "block";
        dropdownMenu.style.opacity = 1;
        dropdownMenu.style.transform = "translateY(0)";
    };
}

dropdownButton.addEventListener('click', showMenu)

const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
const display = document.getElementById('display')

const images = ['test1', 'test2', 'test3']
const imagePath = './static/images/'
let pointer = 0

let intervalId
const intervalDuration = 5000

function slide(interval, applyTransition = false) {
    if (applyTransition) {
        // Start fade-out effect
        display.classList.add('fade-out');
        display.classList.remove('fade-in');

        // Change the image source after the fade-out transition
        setTimeout(() => {
            updateImageSource(interval);

            // Start fade-in effect
            display.classList.add('fade-in');
            display.classList.remove('fade-out');
        }, 250);
    } else {
        // If transition not needed, just update the image source
        updateImageSource(interval);
    }
}

function updateImageSource(interval) {
    if (pointer + interval < 0) {
        pointer = images.length - 1;
    } else if (pointer + interval >= images.length) {
        pointer = 0;
    } else {
        pointer += interval;
    }
    display.src = `${imagePath}${images[pointer]}.png`;
}

function startSlideInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(() => slide(1, true), intervalDuration);
}

leftArrow.addEventListener('click', () => {
    slide(-1, false);
    startSlideInterval()
});
rightArrow.addEventListener('click', () => {
    slide(1, false);
    startSlideInterval()
});

const pageSetup = (function() {
    startSlideInterval()
})();