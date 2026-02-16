/*
imprimir la tabla de multipilicar del numero que ingreso el usuario
*/

let tabladel = parseInt(prompt("de que numero tu tabla de multiplicar?: "));

resultado = "tabla del: " + tabladel;

for (let contador = 1; contador <= 10; contador++) {
//console.log(`${tabladel} X ${contador} = ${tabladel * contador}`);

    let multi = contador * tabladel;

    resultado += ` \n ${contador} X ${tabladel} = ${multi}`;

}
console.log(resultado);