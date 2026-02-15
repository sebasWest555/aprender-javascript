//switch
let desayuno = 3;
switch (desayuno) {
    case 1:
        console.log("desayunamos huevooos");
        break;
    case 2:
        console.log("desayunamos caca");
        break;
    case 3:
        console.log("desayunamos sexo");
        break;
    default:
        console.log("desayunaste pura monda");
        break;
}

//condicional ternario

let nombre= "tupu";
let edad = 21;

let resultado = (edad > = 21) ? "es mayor de edad" : "todavia no puedes comprar alcohol"; //es como un if pero en un a linea y para resultados chiquitos
console.log(resultado);
//diferencia entre let y var (ambito y bloques)

/*
ora si que se terata de donde se pueden guardar y usar las variables dentro de un bloque como un ciclo y asi.
let solo puede estar dentro del bloque en el que se creó,
var si es mas global.

eso nos da posibilidad de intanciar varias variabkes con ese nombre sin cambiar el valor de la anterior
*/