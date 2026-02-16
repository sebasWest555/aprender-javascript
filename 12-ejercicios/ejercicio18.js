/*
    se tiene un numero secreto del 1 al 17 y el usuario tiene que adivinar el numero
    haz un programa que permita adivinar
*/

const numerin = 5;

let trai;

while (trai != numerin) {
    trai = parseInt(prompt(`adividamesta: (del 1 al 17)`));

    if(trai == numerin){
        alert("a huvin padre le atinastte, era el: " + numerin);

    }else{
        alert("es tamal");
    }
}