/*
ejercicio 29:

    crea una funcion que reciba una palabra y devuelva cuantas vocales tiene
*/

function vocales(palabra){

    let contador = 0;

    const vocaless = "aeiouAEIOU";

    for(let letra of palabra){
        if(vocaless.includes(letra)){
            contador++;
        }
    }

    return contador;
}

console.log("la palabra tiene: "+ vocales(prompt("ingresa una palabra: "))+" vocales");

