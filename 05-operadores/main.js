//operadores aritmeticos

let n1 = 1234;
let n2 = 4321;

let suma = n1 + n2;
let re = n1-n2;
let multi = n1*n2;
let div = n1/n2;
let mod = n1%n2;
let pot = n1 ** 2;

console.log ("suma: " + suma);
console.log ("resta" + re);
console.log ("multi" + multi);
console.log ("division:" + div);
console.log ("resto: " + mod);
console.log ("potencia: " + pot);

//asignacion
let numerin = 5;

numerin += 1;

console.log(numerin);

//comprobacion
let numerr = 31;

console.warn(numerr == 31); // aunque se pusieran "", == no es estricto y seguiria leyendi el valor sin el tipo de la variable

console.warn(numerr === "32");

console.warn(numerr != 31);

console.warn(numerr !== "31"); // lo mismo que con los == y ===

// y luego estan <,>, >= y <= pero pus esos ya

//logicos

let mayoerdeedad = true;
let tieneentrada = true;
//and
console.log(mayoerdeedad && tieneentrada );
//or
console.log(mayoerdeedad || tieneentrada);
//not
console.log(!mayoerdeedad)

//cadena

let mensasje1 = ("hola");
let mensaje2 = ("que pedo mierda");

let mt = mensasje1 + " " + mensaje2;

mt  += " me la pelas, ca";

console.warn(mt);

//increase and decrease
/*
es lo de ++ y --
*/

