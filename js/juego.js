//Funciones


let choose1 = (nPokemon) => {

    if(team1 == ""){
        team1 = allPokemons[nPokemon];
        let pokemonPrimero = document.getElementById(nPokemon);
        pokemonPrimero.disabled = true;
        pokemonPrimero.classList.add("selected");
        console.log(team1);
    } else if( team2 == ""){
        team2 = allPokemons[nPokemon];
        let pokemonPrimero = document.getElementById(nPokemon);
        pokemonPrimero.disabled = true;
        pokemonPrimero.classList.add("selected");
        console.log(team2);

        setTimeout(() => {
            cambiaPantalla(3);
        }, 2500);
    }
}

const cleanGame = () => {
    team1 = "";
    team2 = "";
    ganador = "";
}

const cambiaPantalla = (cambio) => {

    let pantallaDeseada = "screen" + cambio;

    let arrayPantallas = ["screen1", "screen2", "screen3", "screen4"];

    //Le decimos a filter que si encuentra el valor que le pasamos en el array, no lo incluya
    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));
    //Le ponemos display "block" a la pantalla deseada
    document.getElementById(pantallaDeseada).style.display = "block";
    //Recorremos el arrayPantallas para poner el display:none
    for(let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }

}


//Algoritmo

//Se puede hacer con un While que salga del bucle cuando el coche llegue a completar x metros.


//Funcion para random
const funciones = {
    
    minMax: (n, min, max) => {
        //min and max limiter..
        return Math.max (Math.min (n, max), min);
    },
    random(min, max){
        //random creation of a number..
        return Math.floor(Math.random() * (max - min) + min);
    }
    
}
