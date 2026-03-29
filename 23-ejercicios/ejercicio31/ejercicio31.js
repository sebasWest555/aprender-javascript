//cambiar los colores con tocar el boton

let boton = document.querySelector("#btnsemaforo");
let luces = document.querySelectorAll(".luz");
let indice = 0;

boton.addEventListener("click", () => {
    console.log(luces);
    luces.forEach(luz => luz.classList.remove ("activa"));
    luces[indice].classList.add("activa")

    indice++;

    if (indice > 2) {
        indice = 0;
        }

}); 