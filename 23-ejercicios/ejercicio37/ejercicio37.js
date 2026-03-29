/*
1. crea un formulario con estos campos: nombre, apellido y edad
2. añade un boton de enviar y usa el evento submit
3. muestra los datos por pantalla cuando se termine de enviar el formulario
*/

const formulario = document.querySelector("#formulario");
const caja_info = document.querySelector(".info");

let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let edad = document.querySelector("#edad");

let infonombre = document.querySelector("#info_nombre strong");
let infoapellido = document.querySelector("#info_apellido strong");
let infoedad = document.querySelector("#info_edad strong");

formulario.addEventListener("submit" , (e) => {
    e.preventDefault();

    console.log("formulario enviado");

    caja_info.style.display = "block";
    infonombre.textContent= nombre.value;
    infoapellido.textContent = apellido.value;
    infoedad.textContent = edad.value;

    console.log(nombre.value, apellido.value, edad.value);

});
