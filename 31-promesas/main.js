//promesas

let mipromesa = new Promise((resolve, reject) => {
    let correcto = true;

    setTimeout(() => {

        if (correcto) {
            let miobj = {
                nombre: "sexo 2",
                categoria: "porno",
                year: 2004
            };
            resolve(miobj)
        } else {
            reject("no se ha cumplido la promesa");
        }
    }, 3500);

})



mipromesa
    .then(resultado => {
        console.warn(resultado);

    })
    .catch(error => {
        console.warn("error", error);
    })


//promesas encadenadas

function servirpizza (){
    //15
    return new Promise((resolve) => {
        setTimeout(() => resolve("pizza servida!! "), 15000);
    })
}

function servirhamburguesa (){
    //8
    return new Promise((resolve) => {
        setTimeout(() => resolve("hamburguesa servida!! "), 8000);
    })
}

function servirmecos (){
    //12
    return new Promise((resolve) => {
        setTimeout(() => resolve("mecos servidos!! "), 12000);
    })
}
/*
servirpizza()
            .then(resultado1 =>{
                console.log(resultado1)
                return servirhamburguesa();
            })
            .then(resultado2 => {
                console.log(resultado2);

                return servirmecos();
            })
            .then(resultado3 => {
                console.log(resultado3);
            })
            .catch(e => {
                console.error("esta mal we" , error);
            })
*/

//async y await

async function servirPlatos() {
    try{
    let res1 = await servirpizza();
    if (res1 != "sdñknevcw") {
        throw new Error("el pepe");
    } else {
        console.warn(res1);
    }

    let res2 = await servirhamburguesa();
    console.warn(res2);

    let res3 = await servirmecos();
    console.warn(res3);
    }catch(error){
        console.error("error" , error);
    }
    

}

servirPlatos();