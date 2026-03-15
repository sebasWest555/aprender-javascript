let nombres = ["sebas", "vane", "axel", "jaime", "alvaro", "leo", "pablo", "jesus", "potter"];

//for

for (let i = 0; i < nombres.length; i++) {
    //console.log(nombres[i]);
    
}
document.write("<h1>listado de gente que es lavadamas</h1>");
document.write("<ul>");

for (let i = 0; i < nombres.length; i++) {

    document.write('<li>'+nombres[i]+'</li>');

}

document.write("</ul>");

//bucles para recorrer arrays

console.log("***************************************************************************************************************************************************");

//For Of

for (let wey of nombres) {
//  console.log(wey);
}

// for in

for (let wey in nombres) {
    /*if (!Object.hasOwn(nombres, wey)) continue;
    
    const element = nombres[wey];
    console.log(wey, element);
    */
    
}

//For Each

nombres.forEach((nombres, wey) => {
//  console.log(wey , nombres)
});

//map

let act = nombres.map(wey =>{
    console.log(wey);
    return wey + " me la pela";
});

console.log(act);

//arrats multidimensionales

let categoria = ["lucha","deportes","accion","sandbox"];
let videojuego = ["tekken","fifa","pilin", "gta 6"];

let videojuegos = [categoria,videojuego];

console.log(videojuegos);

console.log(videojuegos[1][2]);
console.log(videojuegos[0][3]);

//arrays bidimensionales

let tabla = [
    ["producto", "cantidad", "precio"],
    ["PC",            2,         350],
    ["smartphone",    4,         100],
    ["impresora",     4,         345]
];

console.log(tabla[2][0], tabla[2][2]);

tabla.forEach(fila =>{
    fila.forEach(columna =>{
        console.log(columna);
    });
});
console.table(tabla);

document.write("<table border = 1>");

tabla.forEach((fila , index)=> {

    document.write("<tr>");
    fila.forEach(columna =>{
        if (index === 0) {
            document.write("<th>"+columna+"</th>")
        }else{
            document.write("<td>"+columna+"</td>");
        }
    });
    document.write("</tr>");
});
document.write("<table>");

document.write("</table>");

window.alert("SEBAS ₩€$₺ CORPORATION");

//arrays tridimensionales
console.log("***************************************************");


let menurestaurante = [
    ["plato",     "cantidad",          "precio",           "tamaños"],
    ["menu pizza",     2,                  234,             ["s","m","l"]],
    ["menu burguer",   3,                  213,             ["s","m","l"]],
    ["menu culo",      69,                 666,             ["que", "ricos", "son", "los", "culos"]]
];

for (let menu  of menurestaurante) {
    console.log("------------------------------");

    console.log(menu)

    if(Array.isArray(menu[2]) && Array.isArray(menu[3])){
        console.log(menu[0]);

        for(let index in menu[2]){
            console.log(menu[2][index], menu[3][index], "varos");
        }
    }

    /*for(let fila of menu){
        console.log(fila);
        if(Array.isArray(fila)){
            for(subfila of fila){
                console.log(fila);
            }
        }
    }*/
}