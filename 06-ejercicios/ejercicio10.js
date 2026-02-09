/*
ejercicio 10

el otro dia fui a las pic´s,
iba con mis vales,
yo me pedi 2, raul se trago 3 y axel se zumbo 6

cuantras hamburguesas con pelo se comieron en total

is it true that i ate more than axel?
*/
let burguerss = 2;
let burguersr = 3;
let burguersa = 6;

let totalburguers = burguerss + burguersr + burguersa;

let tragon = burguerss > burguersa;

let resultado = `
en total fueron ${totalburguers} y la neta es ${tragon} que sebastian comio mas que axel
`;

console.log(resultado);