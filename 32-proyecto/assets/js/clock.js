let clock = document.querySelector(".clock__time");

setInterval(() => {

    let mydate = new Date();
    let hours = mydate.getHours();
    let mins = mydate.getMinutes();
    let secs = mydate.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    clock.innerHTML= ` ${hours}:${mins}:${secs}`;


}, 1000);