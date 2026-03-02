let nombres = ["sebas", "vane", "axel", "jaime", "alvaro", "leo", "pablo", "jesus", "potter"];

//for

for (let i = 0; i < nombres.length; i++) {
    //console.log(nombres[i]);
    
}

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