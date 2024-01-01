const dropdownButton = document.getElementById('dropdownbtn')
const dropdownMenu = document.getElementById('dropdown-menu')

function showMenu() {
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block' ? 'none' : 'block');
}

dropdownButton.addEventListener('click', showMenu)