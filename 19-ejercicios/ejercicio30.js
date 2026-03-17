/*
ejercicio 30.

crea una funcion que reciba un numero y devuelva su factorial
*/

let elfactorial = (numero) =>{

    if (numero <= 1) {
        return 1;
    }

    let factorial = 1;

    for(let i = 2; i<= numero; i++){

        factorial = factorial *i;
    }

    return factorial;
}

console.log(
    elfactorial(
        Number(prompt("dame un numero y te dire su factorial",0))
    )
)