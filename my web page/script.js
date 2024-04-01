let toggleBar = document.querySelector('.toggleBar');
let menu = document.querySelector('.mainMenu');
toggleBar.addEventListener('click', () => {
    menu.classList.toggle('hideMenu');
    // if (menu.classList.contains('.hideMenu')) {
        setTimeout(() => {
            menu.style.display = "none";
        }, 500);
    // }
})