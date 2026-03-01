/*
una bolsa de 37 caramelos
si te comes uno se le bajan
simuola eso con un bucle
*/
let bolsa = 37;

while (bolsa >0) {
    
    console.log(`te comiste un dulce, ya nomas te quedan ${bolsa} dulces`);
    bolsa--;
    if (bolsa == 0) {
        console.log("ya no tienes dulces we");
    }
}