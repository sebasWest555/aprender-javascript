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

setInterval(function(){
    veces++;
    console.log(`se ha ejecutado el interval: ${veces} veces`)
},2500);

//setInterval(saludo,1000);
