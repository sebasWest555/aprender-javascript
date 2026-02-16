/*
    muestra todos los numero divisores de un numero
*/
/*
let numero = parseInt(prompt("ingresa un numero: "));

let valorReal= numero;
while(numero >=1){
    if (numero%valorReal == 0) {
        console.log(`${numero} es divisor de ${valorReal}`)
    }
    numero--;
}
*/
let numero  = parseInt(prompt("dame un nukero mae: "));

for (let contador = 1; contador <= numero; contador++) {
    
    if (numero % contador == 0) {
        console.log(`${contador} es divisor de ${numero}`);
    }
}