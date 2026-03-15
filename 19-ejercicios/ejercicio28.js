/*
ejercicio 28

1.  pide 6 numeros por pantallla y metelos en un array
2. muestra el array entero
    en el. cuerpo de la pagia y en la consola
3.  ordenala y muestrala
4. invierte su orden y muestralo
5. muestra cuantos elementos tiene el array
6. busca uo de los elementos que se han ingresado,
    que nos diga si lo encuetra y su indice
7. refactoriza todo lo posible usado funciones
*/
//1.

let numeros = [];

for (let contador = 1; contador <= 6; contador++) {
    let numerin = Number(prompt("pon un umero we: ", 0));

    numeros.push(numerin);    
}

//2.

function mostrar(coleccion){
    console.log(coleccion);

    document.write("<h1>contenido del array</h1>");
    document.write("<ul>");

    coleccion.forEach(elemento => {
        document.write("<h1>"+elemento+"</h1>");
    });

    document.write("</ul>");

    return coleccion;
}

mostrar(numeros);