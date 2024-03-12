let a = 0
let button = document.getElementById("toggle");
let left_blank_boxes = document.querySelectorAll(".translate-left");
let audio = document.getElementById("audio");
let right_blank_boxes = document.querySelectorAll(".translate-right");
button.onclick = function () {
    if (!a) {
        a++;
    }
    else {
        a--;
    }

    left_blank_boxes.forEach((blank_box) => {
        blank_box.style.transform = blank_box.style.transform == "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
        audio.play();
    })

    right_blank_boxes.forEach((blank_box) => {
        blank_box.style.transform = blank_box.style.transform == "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
    })

}