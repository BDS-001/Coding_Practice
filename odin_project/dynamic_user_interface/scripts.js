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

function slide(interval) {
    if (pointer + interval < 0) {
        pointer = images.length - 1
    } else if (pointer + interval >= images.length) {
        pointer = 0
    } else {
        pointer = pointer + interval
    }
    
    display.src = `${imagePath}${images[pointer]}.png` 
}

function startSlideInterval() {
    // Clear any existing interval
    clearInterval(intervalId);

    // Set a new interval
    intervalId = setInterval(() => slide(1), intervalDuration);
}

leftArrow.addEventListener('click', () => {
    slide(-1);
    startSlideInterval()
});
rightArrow.addEventListener('click', () => {
    slide(1);
    startSlideInterval()
});

const pageSetup = (function() {
    startSlideInterval()
})();