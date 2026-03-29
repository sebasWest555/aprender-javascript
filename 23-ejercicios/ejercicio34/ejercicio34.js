/*
ejercicio 34:

crea un programa que abra una ventana con una web,
pero en diferentes tamaños

pedir al usuario que elija el tamaño(pequeño, mediano y grande)
*/

let s = document.querySelector("#small");
let m = document.querySelector("#medium");
let b = document.querySelector("#big");

let ventana = (ancho, alto) => {
    window.open("https://archive.org/details/los-3-1.0-finales-de-evangelion67gg",
                "_blank",
                `width = ${ancho}, height = ${alto}`);

    return true;
};

s.addEventListener("click", () => {
    ventana(450,350);
});

m.addEventListener("click", () => {
    ventana(650,550);
});

b.addEventListener("click", () => {
    ventana(850,750);
});