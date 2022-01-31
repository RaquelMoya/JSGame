class Coche {

    constructor(nombre, marca, velocidad, peso, frenada, combustible, metros) {
        this.nombre = nombre;
        this.marca = marca;
        this.velocidad = velocidad;
        this.peso = peso;
        this.frenada = frenada;
        this.combustible = combustible;
        this.metros = 0;

    }

    acelerar() {
        return this.velocidad += 30;
    }

    frenar() {
        return this.velocidad = 0;
    }

};

let coche1 = new Coche("GT", "Ford", 250, 2000, 50, "Gasolina" );
let coche2 = new Coche("Celica", "Toyota", 251, 1900, 70, "Gasolina");
let coche3 = new Coche("TestaRossa", "Ferrari", 270, 2300, 55, "Gasolina");
let coche4 = new Coche("Camaro", "Chevrolet", 299, 1750, 90, "Diesel");