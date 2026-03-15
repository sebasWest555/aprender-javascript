/*
ejercicio 27:

crea un array de personajes de peliculas y
clasificalos en grupos (heroes, villanos, etc...)

*/

const personajes = [
                    "H: Batman",
                    "H: Spider-Man",
                    "H: Superman",
                    "H: Mujer Maravilla",
                    "H: Iron Man",
                    "V: El Guasón",
                    "V: Darth Vader",
                    "V: Thanos",
                    "V: Voldemort",
                    "V: Lex Luthor"
];

let heroe = personajes.filter(personaje => personaje.startsWith("H:"));
let villano = personajes.filter(personaje => personaje.startsWith("V:"));

console.log("heroes:");

heroe.forEach(hero =>{
    console.log(hero.split(":")[1]);
});

console.log("------------");
console.log("villanos:");

heroe.forEach(hero =>{
    console.log(hero.slice(2));
});