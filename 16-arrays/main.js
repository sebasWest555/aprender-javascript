//array, arreglo, matriz

let nombre = "sebas west";

let nombres = ["sebas", "vane", "axel", "jaime"];

let pelis = new Array("hievos 1","huevos 2","huevos 3");

console.log(nombres);
console.log(nombres.length);

console.log(pelis);
console.log(pelis.length);

//acceder a los idices

console.log(nombres[1]);

//modificar un indice
alert(nombres);
nombres[2] = "Axel";
alert(nombres);

//practica

let elemento = parseInt(prompt("que indice del arreglo quieres regresar?:", 0));

if (elemento >= nombres.length) {
    alert("ese no esta vale, pon otro");
}else{
    alert("andale ese si está, es: ".concat(nombres[elemento].toUpperCase()));
}