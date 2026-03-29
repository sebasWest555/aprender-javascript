/*
ejercicio 38:

valida el formulario del ejercicio anterior con js, usando el dom
y las funciones / metodos que conoces.

el nombre y el apellido deben no ser vacios

la edad debe ser mayor a 0 y debe ser siempre un numero
*/

const formulario = document.querySelector("#formulario");
const caja_info = document.querySelector(".info");

let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let edad = document.querySelector("#edad");

let infonombre = document.querySelector("#info_nombre strong");
let infoapellido = document.querySelector("#info_apellido strong");
let infoedad = document.querySelector("#info_edad strong");

let errornombre = document.querySelector("#error_nombre");
let errorapellidos = document.querySelector("#error_apellido");
let erroredad = document.querySelector("#error_edad");

formulario.addEventListener("submit" , (e) => {
    e.preventDefault();

    //validar el nombre
    if (nombre.value.trim() == null || nombre.value.trim().length == 0) {

        let mensaje = "el nombre es de a huevo pa";

        alert(mensaje);

        errornombre.textContent = mensaje;

        return false;
    }else{
        errornombre.style.display = "none";
    }
    //validar apellidos
    if (apellido.value.trim() == null || apellido.value.trim().length == 0) {

        let mensaje = "el apellido es de a huevo pa";

        alert(mensaje);

        errorapellidos.textContent = mensaje;

        return false;
    }else{
        errorapellidos.style.display = "none";
    }
    //validar edad
    let miedad = parseInt(edad.value);
    if (miedad == null || miedad <= 0 || isNaN(miedad)) {

        let mensaje = "la edad es de a huevo pa";

        alert(mensaje);

        erroredad.textContent = mensaje;

        return false;
    }else{
        erroredad.style.display = "none";
    }


    caja_info.style.display = "block";
    infonombre.textContent= nombre.value;
    infoapellido.textContent = apellido.value;
    infoedad.textContent = edad.value;

    console.log(nombre.value, apellido.value, edad.value);

});
