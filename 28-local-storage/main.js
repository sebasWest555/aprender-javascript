//locastorage

//comprobar disponibilidad

if (typeof(Storage) !== "undefined") {
    console.log("local storage disponible");
}else{
    console.log("local storage no disponible");
}

//guardar datos

localStorage.setItem("curso", "+100 proyectos de desarrollo web");
localStorage.setItem("king", "KANYE WEST");

//sacar datos

console.log(localStorage.getItem("king"));

document.querySelector("#curso").textContent = localStorage.getItem("curso");
document.querySelector("#king").textContent = localStorage.getItem("king");

//guardar objetos

let animal = {
    especie: "elefante",
    nombre: "tupu",
    color: "gris" 
};

localStorage.setItem("animal", JSON.stringify(animal));

//recuperar objeto

let animalJS = JSON.parse(localStorage.getItem("animal"));

console.log(animalJS);

//eliminar objetos

localStorage.removeItem("animal");

//vaciar storage

document.querySelector("#vaciar").addEventListener("click", () =>{

    localStorage.clear();
    
});