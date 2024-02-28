var toggle = document.getElementById("toggleLightDark");
var color = document.getElementById("body");
let i = 0;
toggle.onclick = function () {
    if (i == 0) {
        //color.style.backgroundColor = "#2a2a2a";
        // color.style.color = "#ffffff";
        color.classList.remove('test');
        color.style.color = "#000";
        i = 1;
    }
    else if (i == 1) {
        // color.style.backgroundColor = "#c0c0c0";
        color.classList.add('test');
        color.style.color = "#fff";
        i = 0;
    }
}