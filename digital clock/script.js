let second = document.querySelector('.second-hand');
let minute = document.querySelector('.minute-hand');
let hour = document.querySelector('.hour-hand');
let time = new Date()
let hourAngle = 0;
let minuteAngle = 0;
let secondAngle = 0;
if (time.getHours() > 12) {
    hourAngle += (time.getHours() - 12) * 30;
}
else {
    hourAngle += (time.getHours()) * 30;
}
minuteAngle += (time.getMinutes()) * 6;
secondAngle += (time.getSeconds()) * 6;
secondAngle = String(secondAngle);
secondAngle = "rotate(" + secondAngle + "deg)";
second.style.transform = secondAngle;
secondAngle = secondAngle.substring(7, secondAngle.length - 4);
secondAngle = parseFloat(secondAngle);

minuteAngle = String(minuteAngle);
minuteAngle = "rotate(" + minuteAngle + "deg)";
minute.style.transform = minuteAngle;
minuteAngle = minuteAngle.substring(7, minuteAngle.length - 4);
minuteAngle = parseFloat(minuteAngle);

hourAngle += ((minuteAngle) / 12);
hourAngle = String(hourAngle);
hourAngle = "rotate(" + hourAngle + "deg)";
hour.style.transform = hourAngle;
hourAngle = hourAngle.substring(7, hourAngle.length - 4);
hourAngle = parseFloat(hourAngle);

setInterval(() => { 
    if (hourAngle == 360) {
        hourAngle = 0;
        minuteAngle = 0;
        secondAngle = 0;
    }
    secondAngle += 6;
    if (secondAngle % 360 == 0) {
        minuteAngle += 6;
        minuteAngle = String(minuteAngle);
        minuteAngle = "rotate(" + minuteAngle + "deg)";
        minute.style.transform = minuteAngle;
        minuteAngle = minuteAngle.substring(7, minuteAngle.length - 4)
        minuteAngle = parseFloat(minuteAngle);
    }
    hourAngle += 6/720;
    secondAngle = String(secondAngle);
    hourAngle = String(hourAngle);
    
    secondAngle = "rotate(" + secondAngle + "deg)";
    hourAngle = "rotate(" + hourAngle + "deg)";

    second.style.transform = secondAngle;
    hour.style.transform = hourAngle;
    secondAngle = secondAngle.substring(7, secondAngle.length - 4)
    hourAngle = hourAngle.substring(7, hourAngle.length - 4)

    secondAngle = parseFloat(secondAngle);
    hourAngle = parseFloat(hourAngle);
}, 1000);