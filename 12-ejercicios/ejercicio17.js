/*
imprimir los numeros impares que hay entre dos numeros que nos dio el usuario
*/

let n1 = parseInt(prompt("dame el primer numero: "));
let n2 = parseInt(prompt("aira el sugundo we"));

while (n1 < n2) {
    n1 ++;

    if (n1 % 2 != 0) {
        console.log(`${n1} es impar`);
    }
}