//eventos

let botoncito = document.querySelector("#botoncito");

botoncito.addEventListener("click", (event) => {
    alert("has dado clic al boton");

    console.log(event);
});


//doble clic

let botondoble = document.querySelector("#botonDoble");

botondoble.addEventListener("dblclick", () => {
    alert("has dado doble click :)");
});

//mouse over

let cajatexto = document.querySelector("#cajatexto");

cajatexto.addEventListener("mouseover", () => {
    console.log("pasaste el mosue por encima");
});

//mouse out

cajatexto.addEventListener("mouseout", () => {
    console.warn("has salido de la caja de texto");
});

cajatexto.addEventListener("mousemove", () => {
    console.error("te estas moviendo adentro de la caja")
});

//eventos de teclado

let campotexto = document.querySelector("#campotexto");

campotexto.addEventListener("keydown", (event) => {
    console.log("has presionado la tecla: " + event.key);
});


campotexto.addEventListener("keyup", (event) => {
    console.warn("has soltado la tecla: " + event.key);
});
/*
campotexto.addEventListener("keypress",  (event) => {
    console.error("matienes pulsada la tecla: " +event.key);
});
*/

//eventos de formulario

//submit

let superformulario = document.querySelector("#superformulario");

superformulario.addEventListener("submit" , (event) => {

    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#mail").value;
    let genre = document.querySelector("#genero").value;

    alert(nombre);
    alert(correo);
    alert(genre);

});

//input

let inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", () => {
    console.log(("el usuario ha escrito: " + inputNombre.value));
});

//change
let selectgenero = document.querySelector("#genero");

selectgenero.addEventListener("change", function(){
    console.warn("has cambiado de sexo a: " + this.value);
});

//blur

let campoemail = document.querySelector("#mail")

campoemail.addEventListener("focus" , () =>{
    console.log("acabas de etrar al campo mail, aguas ahi");

});

campoemail.addEventListener("blur", () => {
    console.warn("has salido del campo mail");

})

//evetos del dom y de la ventana

document.addEventListener("DOMContentLoaded", () => {
    console.log("ha cargado todo el dom");
});

window.addEventListener("load", () => {
    console.warn("toda la pagina se cargo")
});

window.addEventListener("resize", () => {
    console.log("se ha redimencionado la pagina");

});

window.addEventListener("scroll", () => {
    console.log("estas en el pixel: "+Math.round(window.scrollY)+ " del scroll de la patalla");
});


//eventos del portapapeles

let portapapeles = document.querySelector("#portapapeles");

portapapeles.addEventListener("copy" , () => {
    alert("no se puede copiar maricooon");
    navigator.clipboard.writeText("");
});

portapapeles.addEventListener("paste" , () => {
    alert("se pego contenido");
});

portapapeles.addEventListener("cut" , () => {
    alert("se corto un pedazo");

});

portapapeles.addEventListener("contextmenu" , () => {
    console.warn("el usuario ha abirto el menu contextual");
});

//dejar de escuchar un evento

let botoncito2 = document.querySelector("#botoncito2");

function alertin(){
    alert("has dado clic en el boton 2");
}

botoncito2.addEventListener("click", alertin);

setTimeout(() => {
    botoncito2.removeEventListener("click", alertin);

    alert("ya no opuedes hacer clic aqui puta");
}, 10000);

//propagacion de eventos

let cajapadre = document.querySelector("#cajapadre");
let botonhijo = document.querySelector("#botonhijo");


cajapadre.addEventListener("click", () => {
    alert("has hecho clic al padre");
});

botonhijo.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("has hecho boton hijo");
});