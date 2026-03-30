//objetos literales
//estructura de datos que agrupa propiedades y metodos 
// bajo un mismo nombre

let peli = {
    titulo: "por tus pujidos nos cacharon",
    yeaar: 2005,
    genre: "porno",
    director: "sebaswest",
    prota: "sebaswest",
    elenco: ["geste", "kanye west", "peña nieto", "mia mallkova", "vane"],
    detalles: {
        duracion: 120,
        clasificacion: "xxx"
    },

    d: function(){
        return `${this.titulo} es un peliculoooooooon, la dirige el cabron de ${this.director}
    y es la mejor pelicula del genero ${this.genre}`
    },

    mostrarelenco: () => {
        console.log("elenco de actores");

        peli.elenco.forEach(nombre => {
            console.log(nombre);
        });
    },

};
console.log(peli.d());

peli.mostrarelenco();

console.log(peli.detalles.clasificacion);

delete peli.yeaar;


//json
//javascript object notation

//formato de texto entre cliete y servidor, solo permite tipos de datos primitivos va

let peliJSON = JSON.stringify(peli);

console.log(peliJSON);

let jsonconnverted = JSON.parse(peliJSON);

console.log(jsonconnverted);

//recorrer un objeto

let caja = document.querySelector("#datos");

for (let clave in peli){
    caja.innerHTML += `<p>${clave}: ${peli[clave]} </p>`
}