/*
condicional if

ya sabemos que es ca
pero en js
*/

let israining = true;

if (israining == true) {
    console.log("llevate paraguas we");
}else{
    console.log("no te llevs nada we");
}

//ejemplo 2

let concebolla = true;

if (concebolla) {
    console.log("tu hamburguesa llevara cebolla porque ya somos hombres we");

}else{
    console.log("la burguer no lleva cebolla");

}

//ejemplo 3

let nombre = "joaquin";

let edad = 32;

if(edad >= 18){
    console.log("pasale al sirenas rey");
    if (edad <= 20) {
        console.log("esun adolescente");
    }else if(edad >= 70){
        console.log("es un rukailo");
    }else{
        console.log("es un adulto")
    }
}else{
    console.log("orale pa alla mierdas")

}

//ejemoplo 4  negacion de un condicional

let buentiempo = false;

if(buentiempo){
    console.log("vamos por un helado");
}else if(!buentiempo){
    console.log("no vamos a nigun lado ca")
}

//ejemplo 5 condicionales y operadores logicos

let year = 2028;

if (year >= 200 && year <= 2030){
    console.log("estamos en la era moderna");
}else if(year > 2030){
    console.log("estamos en la era postmoderna");
}else{
    console.log("estamos en el pasado we");
}

//ejemplo 7 || 'or'

if (year == 2007 || year == 2017 || year == 2027 || year == 2037) {
    console.log("el año termona en 7");
}else{
    console.log("año desconocido");
}
