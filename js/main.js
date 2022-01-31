//Declaración de la class Coche

class Pokemon {

    constructor(nombre, tipo, defensa, resistencia, fuerza, golpeo, vida, agilidad, azar ) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.defensa = defensa;
        this.resistencia = resistencia;
        this.fuerza = fuerza;
        this.golpeo = golpeo;
        this.vida = 100;
        this.agilidad = agilidad;
        this.azar = azar;

    }

    atacar(enemigo){

        /*Declaro la variable suerte que será el resultado de la función random que está en juego.js */

        let suerte = funciones.random(1, enemigo.azar);

        /*Ahora declaramos la variable hit con el resultado de restarle a la defensa del enemigo el valor del golpeo, y luego lo multiplicamos por la variable suerte para saber cuánto daño hace el golpe*/

        let hit = (this.golpeo - enemigo.defensa) * suerte;

         /*finalmente , restamos a la vida del enemigo el valor establecido en el golpe (hit)*/
         enemigo.vida -= hit;
    }
    
};

//Instanciando corredores

let pokemon1 = new Pokemon("Pikachu", "electrico", 150, 150, 80, 80, 100, 100);
let pokemon2 = new Pokemon("Charmander", "fuego", 150, 150, 100, 80, 100, 80);
let pokemon3 = new Pokemon("Squirtle", "Agua", 130, 150, 100, 70, 100, 70);
let pokemon4 = new Pokemon("Bulbasaur", "planta", 100, 170, 90, 60, 100, 80);

//Generando variables básicas de entorno

let allPokemons = [pokemon1, pokemon2, pokemon3, pokemon4];

let team1 = [];

let team2 = [];

let ganador = "";

