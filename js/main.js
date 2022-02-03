//Declaración de la class Pokemon

class Pokemon {

    constructor(nombre, id, tipo, defensa, resistencia, fuerza, golpeo, vida, agilidad, azar ) {
        this.nombre = nombre;
        this.id = id;
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
        /*Posible funcion 1
        let luck = funciones.random(1, enemigo.azar); //suerte defensa
        let handic = funciones.random(1, 5); //handicap ataque
        let hit = (this.fuerza - handic) - (enemigo.defensa + luck);
        let speed = funciones.random(1, 100); //handicap de velocidad

        if (speed < enemigo.agilidad) {
            hit -= funciones.random(1, 5);
        }
        enemigo.vida -= hit;*/
        
        //Posible funcion 2
        /*Declaro la variable suerte que será el resultado de la función random que está en juego.js */

        //let suerte = funciones.random(1, enemigo.azar);

        /*Ahora declaramos la variable hit con el resultado de restarle a la defensa del enemigo el valor del golpeo, y luego lo multiplicamos por la variable suerte para saber cuánto daño hace el golpe*/

      //  let hit = (this.golpeo - enemigo.defensa) * suerte;

         /*finalmente , restamos a la vida del enemigo el valor establecido en el golpe (hit)*/
         //enemigo.vida -= hit;

    }
    
};

//Instanciando corredores

let pokemon1 = new Pokemon("pikachu", "1",  "electrico", 150, 150, 80, 80, 100, 100);
let pokemon2 = new Pokemon("charmander", "2", "fuego", 150, 150, 100, 80, 100, 80);
let pokemon3 = new Pokemon("squirtle", "3", "Agua", 130, 150, 100, 70, 100, 70);
let pokemon4 = new Pokemon("bulbasaur", "4", "planta", 100, 170, 90, 60, 100, 80);

//Genero un traductor/diccionario

let allPokemons = {
    1 : pokemon1,
    2 : pokemon2,
    3 : pokemon3,
    4 : pokemon4
}

//Generando variables básicas de entorno

let team1 = "";

let team2 = "";

let ganador = "";

