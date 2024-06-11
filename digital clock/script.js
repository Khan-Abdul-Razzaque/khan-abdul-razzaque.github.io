let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let date = new Date();
    hour.innerHTML = date.getHours() == 0 ? 12 : date.getHours() > 12 ? (date.getHours() - 12) : date.getHours();
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();
    console.log(sec.innerHTML);
}, 1000);