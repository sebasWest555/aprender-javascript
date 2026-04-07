/*
¡¡¡ SUPER EJERCICIO DE JS!!!

crea una apllicacion web en la que puedas añadir, mostrar y eliminar
tus pelis favs we

cada pelicula debe tener:

- titulo
- fecha de añadicion
- puntuacio de popularidad (aleatorio entre 1 y 100)

las peliculas deben manntenerse guardadas aunque se recargue la pagina,
y se debe poder eliminar cualquiera de ellas de la lista en cualquier momento. 

tareas:
- ej.39: crea el formulario necesario º
- ej.40: funcion para guardar peliculas co n los datos necesarios º
- ej.41: fucion para mostrar las pelis extraidas del localstorage º
- ej.42: haz que las pelis carguen autmaticamente al abrir la web º
- ej.43: funcion para eliminar pelis. º
*/

function eliminar(indice){
    //sacar el array de objetos del localstorage

    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    //eliminar peli del indice

    pelisGuardadas.splice(indice, 1);

    //actualizar array del localstorage

    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    //mostrar listado
    mostrar();
}

function mostrar() {
    //seleccionar la etiqueta del listado

    let listado = document.querySelector("#listado");

    //sacar las pelis del localstorage

    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    //si no hay pelis, mostrar mensaje

    if (pelisGuardadas.length === 0) {
        listado.innerHTML = "no hay peliculas ca";

        return false;
    }

    //reecorrer pelis y mostrar

    pelisGuardadas.forEach((pelicula, indice) => {
        const peliArt = document.createElement("article");

        peliArt.innerHTML = `
            <h3>${pelicula.titulo}</h3>
            <p>Fecha: ${pelicula.fecha}</p>
            <p>Popularidad: ${pelicula.pop}</p>
        `;

        //crear boton y bindearle evento
        const eliminarBtn = document.createElement("button");

        eliminarBtn.textContent = "eliminar";
        eliminarBtn.addEventListener("click", () => eliminar(indice));

        peliArt.appendChild(eliminarBtn);
        peliArt.appendChild(document.createElement("hr"));

        listado.appendChild(peliArt);
    });

    //opcional
    return true;
}

function guardar() {
    alert("rico sexxxo");
    //seleccionar la caja de texto y sacar su valor
    let campotitulo = document.querySelector("#titulo");
    let titulo = campotitulo.value;

    //validacion
    if (titulo.trim() === "") {
        alert("pon algo we, no lo dejes asi");

        return false;
    }
    //conseguir fecha actual

    const date = new Date();

    const actualdate = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    console.log(actualdate);

    //generar un numero aleatorio para la popularidad

    let pop = Math.floor(Math.random() * 100) + 1;

    //crear objeto pelicula

    let pelicula = {
        titulo,
        fecha: actualdate,
        pop
    }

    console.log(pelicula);

    //sacar todas las peliculas (array de objetos)

    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    if (!pelisGuardadas) {
        pelisGuardadas = [];
    }

    //añadir al array la nueva peli

    pelisGuardadas.push(pelicula);

    //guardar todo en el localstorage

    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    //limpiar el campo de texto

    campotitulo.value = "";

    //mostrar las peliculas

    mostrar();

    //return opcional

    return true;
}

window.addEventListener("load", () => {

    //cargar todas la peliculas por defecto
    mostrar();

    //aplicar evento a form pa guardar
    let form = document.querySelector("#form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        guardar();

    });
});

