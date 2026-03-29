/*
ejercicio 33:
crear un cotadpr de clics en un boton

cuando llegue a 17 clics mostrar que se ha llegado a limite

si se pasa, reiniciar el contador

*/

let contador = 0;

let numeroClics = document.querySelector("#numeroClics");

let boton = document.querySelector("#contadorclics");

boton.addEventListener("click", () => {
    contador++;

    if (contador === 17) {
        numeroClics.textContent = "limite alcanzado";
        contador = 0;
    }else{
        numeroClics.textContent = contador + " clics";
    }

});