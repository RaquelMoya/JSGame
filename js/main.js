//Funcion para random
const functions = {
    
    random(min, max){
        //genero número random
        return Math.floor(Math.random() * (max - min) + min);
    }
    
}


//Declaración de la class Pokemon

class Pokemon {

    constructor(name, id, type, defense, resistance, strong, hit, life, agility, luck ) {
        this.name = name;
        this.id = id;
        this.type = type;
        this.defense = defense;
        this.resistance = resistance;
        this.strong = strong;
        this.hit = hit;
        this.life = 100;
        this.agility = agility;
        this.luck = functions.random(1,20);
    }

    atack() {
       
        this.life -= this.luck;

        this.luck=functions.random(1,20);
    
    }
};

//Instanciando personajes

let pokemon1 = new Pokemon("pikachu", "1",  "electric", 150, 150, 80, 80, 100, 100, 1);
let pokemon2 = new Pokemon("charmander", "2", "fire", 150, 150, 100, 80, 100, 80, 1);
let pokemon3 = new Pokemon("squirtle", "3", "water", 130, 150, 100, 70, 100, 70, 1);
let pokemon4 = new Pokemon("bulbasaur", "4", "plant", 100, 170, 90, 60, 100, 80, 1);

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
