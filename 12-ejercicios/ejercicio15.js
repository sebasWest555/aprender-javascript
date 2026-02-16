/*
vamos a sumar cada nunmero que ingrese el usuario hasta que este sea negativo va
*/

/*let numerin = prompt("dame un numero pa sumar");

while(numerin <= 0){
    let numante = numerin;

    numerin = prompt("dame otro numeor") += numerin
}
alert(`la suma de todos los numeros es ${numerin}`);
*/
let numero  = 0;
let suma = 0;
let contador = 0;

do {
    numero  = parseInt(prompt("dame un numero") , 0);
    if (isNaN(numero)) {
        numero = 0;
    }else if(numero >=0){

        suma  += numero;
        contador++
    }

} while (numero >=0);

alert(`la suma de los numeros es: ${suma}`);
alert(`y la media es: ${(suma/contador)}`);