/*
un canguro salta tres metros por cada salto
haz un programa que diga cuanto saltó
y tambien cuantos metros de verga se comio la puta
*/

/*let disalto = 3;
let mertos = 0;
for ( mertos; mertos <= 17; mertos++){
    disalto += disalto;
}
alert(`despues de brincar ${mertos} veces, el canguro recorrió ${disalto} metros`)*/

let disalto = 3;
let saltos  = 17;

let distanciarecorrida = 0;

for (let contador = 1; contador <= saltos; contador++) {
    distanciarecorrida += disalto;
    
    console.log(`el canguro va en el ${contador} salto y lleva ${distanciarecorrida} metros`)
}