//Funcion para random
const funciones = {
    
    minMax: (n, min, max) => {
        //limite min-max
        return Math.max (Math.min (n, max), min);
    },
    random(min, max){
        //genero número random
        return Math.floor(Math.random() * (max - min) + min);
    }

    
}


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
        this.azar = 1;
    }

    atacar() {
        this.azar = funciones.random*azar;
        
         if(team1.azar > team2.azar) {
            team1.atacar(team2.vida);
        } else {
            team2.atacar(team1.vida);
        }
    
    }
};

//Instanciando corredores

let pokemon1 = new Pokemon("pikachu", "1",  "electrico", 150, 150, 80, 80, 100, 100, 1);
let pokemon2 = new Pokemon("charmander", "2", "fuego", 150, 150, 100, 80, 100, 80, 1);
let pokemon3 = new Pokemon("squirtle", "3", "Agua", 130, 150, 100, 70, 100, 70, 1);
let pokemon4 = new Pokemon("bulbasaur", "4", "planta", 100, 170, 90, 60, 100, 80, 1);

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

