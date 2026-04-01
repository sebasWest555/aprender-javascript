//POO

//molde
class Gato {

    constructor(nombre, raza, color){
        //propiedades o atributos (caracteristicas)
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }
    
    //metodos (acciones)

    maullar(){
        console.log(`${this.nombre} dice: miauuuuuu`);
    }

    saltar(){
        console.log(`${this.nombre} acaba de saltar`);
    }

    //getter
    getRaza(){
        return this.raza;
    }

    setRaza(raza){
        this.raza = raza;
    }


    set guardarcolor(color){
        this.color = color;
    }

    get sacarcolor(){
        return this.color;
    }
    static saludar(){
        alert("que pez ca");
    }
}

let migato = new Gato("michi", "delmer", "mugre");

console.log(migato.nombre);
console.log(migato.getRaza());

migato.maullar();

migato.guardarcolor = "carey";

console.log(migato.sacarcolor);

Gato.saludar();

class Gatoespecial extends Gato {
    constructor(nombre, raza, color, poder){
        super(nombre, raza, color);

        this.poder = poder;
    }

    setpoder(poder){
        this.poder = poder;
    }

    getpoder(){
        return this.poder;
    }

    ejecutar(){
        console.log(`${this.nombre} esta usado su poder de ${this.poder} para matar gente`);
    }
}

let supergato = new Gatoespecial("coco", "fea", "blaco", "supermota")

supergato.ejecutar();

console.log(supergato.getRaza());

supergato.saltar();
/*
let migato2 = new Gato("galleto", "delmer", "galletita");

console.log(migato2.nombre);

migato2.maullar();
*/
