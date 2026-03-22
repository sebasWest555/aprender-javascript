// BOM -> Browser Object Model

//permitwe interactuar conlos elementos, cracteristicas y funcionalidades del navegador 

//alertas y dialogos

alert("un saludo chingon a toda la bada rockera");

//prompt("como se llama tu abuela? ");

//confirm("tu papa ya esta grande?");

//window

console.log(window);

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.outerWidth,window.outerHeight);

console.log(window.closed, window.document, window.navigator.userAgent);
/*
setInterval(() => {
    console.log("wasd");
} ,5000);
*/
console.log(window.scrollX, window.scrollY);

//navigator

console.log(navigator.appName, navigator.appVersion);

if (navigator.onLine) {
    console.log("nno hay interent we");
}else{
    console.log("si tienes wifi we");
}

//location

console.log(location.href);
console.log(location.hostname);

//history

console.log(history.back);
history.forward();

//screen 

console.log(screen.width, screen.height);

//ventaas emergetes aka pop ups

let miweb = window.open("https://es.pornhub.com" , "cachondas aqui");
