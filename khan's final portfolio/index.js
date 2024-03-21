let menuClose = document.getElementById('go');
let menuCome = document.getElementById('come');
let menuToggle = [menuClose, menuCome];

document.querySelector(".menu-close").style.visibility = 'hidden'
menuToggle.forEach(menu => {
    menu.addEventListener('click', () => {
        document.querySelector(".sidebar").classList.toggle("sidebarGo");
        if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
            setTimeout(() => {
                document.querySelector(".menu-come").style.visibility = 'visible'
            }, 300);
            document.querySelector(".menu-close").style.visibility = 'hidden'
        }
        else {
            document.querySelector(".menu-come").style.visibility = 'hidden'
            setTimeout(() => {
                document.querySelector(".menu-close").style.visibility = 'visible'
            }, 300);
        }
    })
});