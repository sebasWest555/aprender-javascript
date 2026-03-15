/*
ejercicio 26:
dado u array de palabras, cuenta cuantas letras tiene cada palabra
y crea un nuevo array que contega solo esos numeros
*/

function cuentaletras(datos){
    let nuevosdatos = datos.map(elemento => elemento.length)
    
    return nuevosdatos;
}

const frutas = ["naranja", "piña", "manzana", "platano", "mango"];

cuentaletras(frutas);

console.log(frutas);
console.log(
    cuentaletras(frutas)
);