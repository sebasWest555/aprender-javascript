//crear un array
let gadgets = ["pc", "laptop", "tablet", "watch"];

console.log(gadgets);


//logitud de un array

console.log(gadgets.length);

//añadir elementos

gadgets.push("ps5");
gadgets.push("caca");

console.log(gadgets);

//eliminrar elementos

gadgets.pop();
gadgets.pop();

console.log(gadgets);

//agregar elementos al principio

gadgets.unshift("ps4");
gadgets.unshift("psp");

//elimiar el primer elemento

gadgets.shift();
gadgets.shift();

console.log(gadgets);

//busqueda devuelve el indice

let indice = gadgets.indexOf("psp");

console.log(indice);

//ver si existe un elemento

let existe = gadgets.includes("rgqerv");
console.log(existe);


//filtrar arrays

gadgets.push("ps6");
gadgets.push("fleshlight");
gadgets.push("mota");
gadgets.push("skate");

/*let gadgetsconA = gadgets.filter( gadgets =>{
    let resultado = false;

    if (gadgets.includes("light")) {
        resultado=true;
    }
    return resultado;
});
*/
let gadgetsconA = gadgets.filter(gadgets => gadgets.includes("light"));

console.log(gadgetsconA);

//reduce

let redicir = gadgets.reduce((total, actual)=> {
    
    let capitalizar = actual[0].toUpperCase + actual.slice(1).toLowerCase();

    return total + ", " + capitalizar;
});

console.log(redicir);

let numeros = [1,2,3,4];

let suma = numeros.reduce((acumulador, numeroactual, iteraciones)=> acumulador+numeroactual);

console.log(suma);


//ordenar

gadgets.sort();

console.log(gadgets);

//revertir el orden

gadgets.reverse();

console.log(gadgets);

//combinar arrays

let unionlibrewe = gadgets.concat(numeros);

console.log(unionlibrewe);

//cinvertir en cadena

let etiquetas = gadgets.join(", ");

console.log(etiquetas);

//copiar porcion de array

let gadgetsfavs = gadgets.slice(3,5);

console.log(gadgetsfavs);

//busqueda (find)

let buscar = gadgets.find(gadget => gadget.length >7);

console.log(buscar);

//findindex

let buscarIndice = gadgets.findIndex(gadget => gadget.length >7);

console.log(buscar);

//some

let letrase = gadgets.some(gadget => gadget.includes("e"));

console.log(letrase);

//every

let letrasa = gadgets.every(gadget => gadget.includes("a"));

console.log(letrasa);

//aplanar

let anios = [

    [1990, 1234, 1999],
    [2001, 2003, 2005],
    [2010, 2011, 2016, [2022, 2025, 2026, [20444, 3454, 2343]]]
];

let plana = anios.flat(3);
console.log(plana);

//copyWithin

let fechas = ["01-01-1999","32-12-32143","12-43-12345","01-02-1234"];

fechas.copyWithin(0,2);

console.log(fechas);

//convertir string en array

let nombre = "SEBAS";

let arrayString = Array.from(nombre);

console.log(arrayString);

//desestructuracion
let [uno,dos,tres] = [1,2,3];

console.log(tres);

let [actor, ...restodeactores] = ["sdf", "SDfgbvcde", "sdfgvcxdf"];

console.log(actor);
console.log(restodeactores);

//expandir arrays

let array1 = [1,2,3];

let arrray2 = [4,5,6];

let arratcompleto = [...array1, ...arrray2];

console.log(arratcompleto);

//de array a string

console.log(gadgets.toString());

//de string a array

let frase = "bienvenido al curso mas facil de JS";

let palabras = frase.split(" ");

console.log(palabras);


//pasar a seo slug
let slug = palabras.join("-").toLowerCase();

console.log(slug);