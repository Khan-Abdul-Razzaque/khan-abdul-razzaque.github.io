let scircle = document.querySelectorAll('.small-circle');
let hex_color_code_options = "0123456789ABCDEF";
let color = "#";
let a = 0
let randNo;

setInterval(() => {
    for (let i = 0; i < 6; i++) {
        randNo = parseInt(Math.random() * 16);
        color += hex_color_code_options.charAt(randNo);
        console.log(randNo);
    }
    console.log(color + "\n");
    scircle.forEach((circle) => {
        circle.style.backgroundColor = color;
    })
    color = "#";
    a++;
}, 2000);