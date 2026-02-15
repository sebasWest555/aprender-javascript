/*
pedir dos numeros, indicar cual es mayor, el menor o si son iguales

PLUS: si no se ingreso un numero, o es 0, volver a pedirlo
*/

let n1 = parseInt(prompt("ingresa un numero:"));
let n2 = parseInt(prompt("ingresa otro numero"));

while (n1 <=0 || n2<= 0 || isNaN(n1) || isNaN(n2)) {
    n1 = parseInt(prompt("ingresa un numero:"));
    n2 = parseInt(prompt("ingresa otro numero"));
}

if(n1 > n2){
    alert(`${n1} es mayor que ${n2}`);
}else if(n2 > n1){
    alert(`${n2} es mayor que ${n1}`);
}else{
    alert("ambos numeron son iguales");
}
