//funciones anonimas
//una fiuncion sin nombre

const saludo = function(){
    console.log("que peditooooo");
};

saludo();

//funciones de callback
//se pasan como parametro de otra funcion,
// para que la otra funcion lo ejecute

let veces = 0;

//setInterval(function(){
//    veces++;
//    console.log(`se ha ejecutado el interval: ${veces} veces`)
//},2500);

//setInterval(saludo,1000);


//funcviones de callback "avanzaod"

function restame(n1,n2,mostrar,multipor3){
    let resta = n1-n2;

    mostrar(resta);
    multipor3(resta);

    return resta;
}

restame(20, 5, function(resultado){
    console.log(resultado);
},
function(resultado){
    console.log(resultado*3);
});

//ambito de variables, SCOPE
/*
ya sabemos que es, es lo de las variables globales y asi, 
con let y connst, las variables solo estan en ese bloque,
con var es otra cosa
*/
//global

let ruta = "pornhub.com";

function showp(){
    console.log(ruta);
}

showp();

//hoisting o elevacion
//no se pueden acceder a variables si ya se declararon

var connhe = "ford ka";

console.log(connhe);

//funciones de flecha

//definir funcionn

let nuevocurso = () =>{
    console.log("puro pornoooooo");
};
nuevocurso();
//utilizarla en callback

setTimeout(()=> {
    console.log("QSDFVCASDVCS")
},2000);