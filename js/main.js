//Declaración de la class Coche

class Pokemon {

    constructor(nombre, tipo, velocidad, peso, fuerza, golpeo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.velocidad = velocidad;
        this.peso = peso;
        this.fuerza = fuerza;
        this.golpeo = golpeo;

    }

    atacar() {
        return this.golpeo += 30;
    }

    esquivar() {
        return this.golpeo = 0;
    }

};

//Instanciando corredores

let pokemon1 = new Pokemon("Pikachu", "electrico", 200, 120, 80, 50);
let pokemon2 = new Pokemon("Charmander", "fuego", 150, 150, 100, 80);
let pokemon3 = new Pokemon("Squirtle", "Agua", 130, 150, 100, 70);
let pokemon4 = new Pokemon("Bulbasaur", "planta", 100, 170, 90, 60);

//Generando variables básicas de entorno

let allPokemons = [pokemon1, pokemon2, pokemon3, pokemon4];

let team1 = [];

let team2 = [];

let ganador = "";