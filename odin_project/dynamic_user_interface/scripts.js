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