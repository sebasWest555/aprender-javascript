//fecth (ajax) solicitudes a servidores

/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(pokemon => { // Le cambiamos el nombre para que tenga más sentido
        console.log(pokemon); // Imprime toooodo el objeto del Pokémon
        
        // Si quieres sacar datos específicos, lo haces así:
        console.log("Nombre we:", pokemon.name);
        console.log("Peso:", pokemon.weight);
        console.log("Experiencia base:", pokemon.base_experience);
    })
    .catch(error => {
        console.error("error we, no se pidieron los datos bien", error);
    });*/

    //sacar datos de un backend de manera asincrona
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            mostrarUsuario(data)
        })
        .catch(error => {
            console.error("error al pedir los datos del servidor", error);        
        });

function mostrarUsuario(users){
    let caja = document.querySelector("#user");
    caja.innerHTML =`
        <h2>${users.address.city} ${users.address.street} ${users.email} ${users.phone}</h2>
    `;
}

//guardar informacion

const usuarioparaguardar = {
    name: "sebas west",
    job: "comedian"
};

fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(usuarioparaguardar)
})
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error(error);
})

//sintaxis con async y await

async function sacarusuarios(){

    try{
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let data = await response.json();

    data.forEach(post => {
        console.log(post.title)
    });
}catch (error){
    console.error("error we, no se pudo", error)
}
}

sacarusuarios();