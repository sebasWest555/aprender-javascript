/*
ejercicio 32:

crea una lista de compra en la que el usuario pueda añadir
nuevos poroductos cin unn campo de texto y unn boton

cada que se añade un producto, un boton para eliminar tambien aparecerá

se pueden agregatr tantos productos como sean necesarios
*/

document.addEventListener("DOMContentLoaded", () => {
    //todo el programa de js

    let nuevoprod = document.querySelector("#nuevoProducto");
    let btnAgregar = document.querySelector("#add");
    let listaprod = document.querySelector("#listacompra");

    btnAgregar.addEventListener("click", () => {

        let productadded = nuevoprod.value.trim();

        if (productadded) {
            

            //crear elemento
            const productofinal = document.createElement("li");
            productofinal.textContent = productadded;

            //eliminar elemento
            const btneliminar = document.createElement("button");
            btneliminar.textContent = "eliminar";

            btneliminar.addEventListener("click", () => {
                productofinal.remove();
            });

            productofinal.appendChild(btneliminar);
            productofinal.classList.add("producto");

            //añadir elemento a la lista
            listaprod.appendChild(productofinal);
            nuevoprod.value = "";


        }
    });
});