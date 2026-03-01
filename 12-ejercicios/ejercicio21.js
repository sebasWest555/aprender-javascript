/*
calculadora

pedir dos numeros

en caso de que no se ingrese un numero bien, volver a pedir

tanto por alerta copmo por consola mostrar el resultado de las 4 operaciones basicas
 */

let n1,n2;

while (n1 <= 0 || n2<=0 || isNaN(n1) || isNaN(n2)) {
    n1= parseInt(prompt("ingresa el primer numero: "));
    n2= parseInt(prompt("ingresa el segundo numero: "));
}

let resultado = `
Suma: ${n1+2}
Resta: ${n1-n2}
Multiplicacion: ${n1*n2}
Division: ${n1/n2}
Resto: ${n1%n2}
`;

alert(resultado);
console.log(resultado);

