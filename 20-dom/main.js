//window.addEventListener("DOMContentLoaded", () =>{});
//DOM - document object model

//getelemetbyid

let caja = document.getElementById("caja");

//modificar caracteristicas de un elemento seleccionado
caja.innerHTML = "<h2>helloooooo</h2>"
/*caja.style.background = "lightblue";
caja.style.maxWidth = "50%";
caja.style.margin = "0 auto";
caja.style.padding = "35px";
caja.style.textAlign = "center";
*/

caja.classList.add("cajita");
caja.classList.add("cajaza");
caja.classList.add("cajon");

console.log(caja.className);

function cambiarcolor(color, radius) {
    caja.style.background = color;
    caja.style.borderRadius = radius;
}

console.log(caja.innerText);
/*
//getelementbyclassname - selecciona elementos con una sola sola clase

let art = document.getElementsByClassName("article");

console.log(art);

for (let i = 0; i < art.length; i++) {
    art[i].classList.add("articulobase");

    //añadir mas html
    art[i].innerHTML += "<a href = 'https://archive.org/details/los-3-1.0-finales-de-evangelion67gg'>leer mas</a>"

    //añadir al nodo del dom
    let enlace = document.createElement("a");
    enlace.setAttribute("href" , "https://archive.org/details/los-3-1.0-finales-de-evangelion67gg");
    enlace.setAttribute("target", "_blank");
    enlace.style.color = "green";

    let textoenlace = document.createTextNode("sigue leyendo");

    enlace.append(textoenlace);
    art[i].append(enlace);

    if (i === 0) {
        art[i].classList.add("articuloamarillo");
    }

    if (i === art.length - 1) {
        art[i].classList.add("articuloultimo");

        art[i].innerHTML  = "<h2>SEBASWESTTTTT</h2>";
    }
}
*/
//getelementbytsgname
let etiquetasArticulo = document.getElementsByTagName("article");

etiquetasArticulo[3].style.backgroundColor = "grey";

etiquetasArticulo[3].style.color = "white";

console.log(etiquetasArticulo[3])

//queryselector

let seccionArt = document.querySelector("#articulos");

//seccionArt.style.background = "lightblue";
seccionArt.style.padding = "20px";

console.log(seccionArt);

//queryselector y clases

let primerarticulo = document.querySelector(".article");

primerarticulo.style.color = "red";

console.log(primerarticulo);

//querysellectorAll

let articulos = document.querySelectorAll("#articulos article");

articulos.forEach((art, i) => {


    console.log(art);

    for (let i = 0; i < art.length; i++) {
        art.classList.add("articulobase");

        //añadir mas html
        art.innerHTML += "<a href = 'https://archive.org/details/los-3-1.0-finales-de-evangelion67gg'>leer mas</a>"

        //añadir al nodo del dom
        let enlace = document.createElement("a");
        enlace.setAttribute("href", "https://archive.org/details/los-3-1.0-finales-de-evangelion67gg");
        enlace.setAttribute("target", "_blank");
        enlace.style.color = "green";

        let textoenlace = document.createTextNode("sigue leyendo");

        enlace.append(textoenlace);
        art.append(enlace);

        if (i === 0) {
            art[i].classList.add("articuloamarillo");
        }

        if (i === art.length - 1) {
            art[i].classList.add("articuloultimo");

            art[i].innerHTML = "<h2>SEBASWESTTTTT</h2>";
        }
    }
});

//mods

const tarjeta = document.querySelector("#tarjeta");

console.log(tarjeta);

tarjeta.textContent = "nuevo texto en tarjeta";

tarjeta.innerHTML = "<strong>contenido HTML de mi tarjeta</strong>";

tarjeta.setAttribute("data-id", 12);
//tarjeta.setAttribute("class", "que pex");

console.log(tarjeta.getAttribute("data-id"));

tarjeta.style.border = "1px solid blue";
tarjeta.style.backgroundColor = "steelblue";
tarjeta.style.padding = "30px";

tarjeta.classList.add("destacar2");

tarjeta.classList.remove("destacar");

tarjeta.classList.remove("remarcado");

tarjeta.classList.toggle/*si esta lo quita, si no lo pone*/("ricosexo");

tarjeta.classList.toggle("destacar2");

const titular = document.createElement("h2");
titular.textContent = ("arriba el cruz azul hdp");

//tarjeta.append(titular);

tarjeta.insertBefore(titular, tarjeta.firstChild);

//tarjeta.querySelector("strong").remove();
