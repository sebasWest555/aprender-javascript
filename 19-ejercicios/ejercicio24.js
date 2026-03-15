/*
ejercicio 24

crea un array con 10 numero aleatorios del 1 al 100
luego, pide al usuario que adivine un numero

mostrar si el usuario le atinó

*/

//let numerosrand = Array.from({length: 10}, ()=> Math.floor(Math.random() * 100)+ 1);
//console.log(numerosrand);

let numeros= [12,34,56,78,90,98,76,54,32,21];

let elije = prompt("adivina el numero del 1 al 100");

if (numeros.includes(Number(elije))) {
    alert("enhorabuena has adivinado el numero");
}else{
    alert("que mal pedo");
}

