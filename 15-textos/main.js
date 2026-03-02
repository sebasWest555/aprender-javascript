//longitud

let nombre = "sebas west";

console.log(nombre.length);

//conversion a texto

let numero = 53845;

console.log(numero.toString());

//toupper

let web = "sebaswestcorp.org";

let WEB = web.toUpperCase();

console.log(WEB);

//tolwer

let plate = "PIZZAGATE";

console.log(plate.toLowerCase());

//charat

let frase = "long live SEBASWEST";

console.log(frase.charAt(4));

//comprobar si una cadena tiene otra,

let slogan = "no tengo ni un peso pero soy el efectivo";

if (slogan.includes("efectivo")) {
    console.log("la palabra existe va");
}else{
    console.log("no existe va");
}

//indexof

let msj = "putos los de la tarde";

console.log(msj.indexOf("tarde"));

//extraer parte de un texto

let curso = "master en JavaScript";
console.log(curso.slice(10));

//reemplaxar un texto

let peli = "sasha grey en la bañera";
console.log(
    peli.replace("bañera", "la verga de west")
);

//trim aka elimiar espacios e blanco

let email = "garcu sebas 714 n @ gmail.com";
console.log(
    email.trim()
);

//separar cadena

let listaCompra = "caca,pedo,pis,pepa,vagina";

let listaArray = listaCompra.split(",");

console.log(listaArray);

let codos = "master en sexo";

console.log(codos.substring(0,6));

//concactenar cadenas

let ciudad = "tarimbaro";
let pais = "mexico";

let ff;

ff = "".concat("mi ciudad es: ", ciudad, " y esta en: ",pais);

console.log(ff);

//empiesa con:
let frase2 = "arriba el cruz azul hijosdesuputamadre :V";

console.log(
    frase2.startsWith("arriba")
);

//termina con:

console.log(frase2.endsWith("V"));

//repetir palabras

let mensa = "las morras me gustan, son lo mejor de la vida \n";

console.log(
mensa.repeat(12)
);


