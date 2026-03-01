/*
funciones.
ya sabemos que son mausqueherramineta para llamaar cuando la ocupemos
*/

function saludo(namez, sustancia){

    //para los parametros opcionales tenemos que asignarle un valor al parametro

    console.log(`que pedo mi piche ${namez}`);
    console.log(`saca la ${sustancia}`);
    console.log("****************************");

    return"hasta la prokzimaaaa";
}

let mensajefinal= saludo("sewkdjvb","wdwdv");

alert(mensajefinal);

saludo("1","a");
saludo("2","b");
saludo("3","c");
saludo("4","d");


//nested functions

function operaciones(n1,n2){

    let results = {
    "suma": (n1+n2),
    "resta": (n1-n2),
    "multiplicacion" : (n1*n2),
    "division": (n1/n2)
    };
    
    return results;
}

function porConsola(n1,n2){

    let results = operaciones(n1,n2);

    console.log(`suma: ${results.suma}`);
    console.log(`resta: ${results.resta}`);
    console.log(`multiplicacion: ${results.multiplicacion}`);
    console.log(`division: ${results.division}`);

    return true;
}

function porPantalla(n1,n2) {

    let results = operaciones(n1,n2);
    
    document.write("<h1>calculadora</h1>");
    document.write(`<h2>suma: ${results.suma}</h2>`);
    document.write(`<h2>resta: ${results.resta}</h2>`);
    document.write(`<h2>multiplicacion: ${results.multiplicacion}</h2>`);
    document.write(`<h2>division: ${results.division}</h2>`);
    document.write("<hr>");

    return true;
}

function calculadora(n1,n2, mostrar = false){
    
    if (mostrar==false) {
        porConsola(n1,n2);
    }else{
        porPantalla(n1,n2);
    }

    return true;
}

calculadora(7,23);
calculadora(5,2,true);


//parametro ...REST aka resto

function mispelis(p1,p2, ...resto_de_pelis){
    console.log(p1);
    console.log(p2);
    console.log(resto_de_pelis);
}

mispelis("porno1", "porno2", "porno3", "porno4", "porno5");

//SPREAD

let nums = [1,2,3,4];

let misnums = [...nums , 5,6,7,8,9,10];
console.log(misnums);

