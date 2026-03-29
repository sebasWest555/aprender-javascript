/*
ejercicio 36:

cree una caja de texto que diga cuantas teclas se han tecleado dentro de la caja de texto

muestra el numero en tiempo real en la web
*/

let contador = document.querySelector("#contador");
let cajapulsos = document.querySelector("#pulsaciones");

let pulsacionesreales = 0;

contador.addEventListener("input", () => {
    //let texto = contador.value.length;

    pulsacionesreales ++;

    cajapulsos.textContent = `pulsaciones: ${pulsacionesreales}`;
});