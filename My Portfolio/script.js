let button = document.getElementById("toggle");
let box = document.querySelectorAll(".box");
button.onclick = function() {
    box.style.visibility = "hidden";
}