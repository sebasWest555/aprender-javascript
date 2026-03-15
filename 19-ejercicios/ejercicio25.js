/*
crea un array deingrediantes. para una receta absurda

muestra la receta en una frase

*/

const ingredientes = ["a", "b", "c", "d", "e", "f","g"];

let frase = `receta absurda: pizza de ${ingredientes.join(", ")} ¡ummmm que rica pizza!`;

document.write("<h1>"+frase+"</h1>");