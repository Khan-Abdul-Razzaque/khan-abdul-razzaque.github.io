let menuToggle = document.querySelector('.menu');
let sideBar = document.querySelector('.side-bar');
let container = document.querySelector('.container');

menuToggle.addEventListener ('click', () => {
    sideBar.classList.toggle('hide-side-bar');
    container.classList.toggle('increase-container-size');
})