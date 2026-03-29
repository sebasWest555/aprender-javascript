/*
ejercicio 35:

crea un programa que permita mover la ventana a diferentes pocisiones
en la panntalla. 

usa botones para mover la vetana a la esquina superior izq y derecha, inferior izq y der
*/
const ancho = window.screen.width;
const alto = window.screen.height;

const anchoVentana = 400; 
const altoVentana = 400;

const btnvetana = document.querySelector("#ventana");
const arribaizq = document.querySelector("#arribaizq");
const arribader = document.querySelector("#arribader");
const abajoizq = document.querySelector("#abajoizq");
const abajoder = document.querySelector("#abajoder");

let miventana = null;

btnvetana.addEventListener("click", () => {
    miventana = window.open("", "nueva ventana", `width=${anchoVentana},height=${altoVentana}`);
});

arribaizq.addEventListener("click", () => {
    if (miventana) {        
        miventana.moveTo(0,0);        
    }
});

arribader.addEventListener("click", () => {
    if (miventana) {
        miventana.moveTo(ancho - anchoVentana, 0);
    }
});

abajoizq.addEventListener("click", () => {
    if (miventana) {
        miventana.moveTo(0, alto - altoVentana);
    }
});

abajoder.addEventListener("click", () => {
    if (miventana) {
        miventana.moveTo(ancho - anchoVentana, alto - altoVentana);
    }
});

