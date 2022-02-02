//Funciones


let choose1 = (nPokemon) => {

    if(team1 == ""){
        team1 = allPokemons[nPokemon];
        let pokemonPrimero = document.getElementById(nPokemon);
        let datosPokemon = document.getElementById("data" + 1);
        pokemonPrimero.onclick = "";//Bloqueo personaje
        pokemonPrimero.classList.add("selected");
        datosPokemon.innerHTML = `${team1.nombre}`;
        console.log(team1.nombre);
    } else if( team2 == ""){
        team2 = allPokemons[nPokemon];
        let pokemonPrimero = document.getElementById(nPokemon);
        let datosPokemon = document.getElementById("data" + 2);
        pokemonPrimero.onclick = "";//bloqueo personaje
        pokemonPrimero.classList.add("selected");
        datosPokemon.innerHTML = `${team2.nombre}`;
        console.log(team2.nombre);

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


//Algoritmo

    //let divFighter1 = document.getElementById("imgFighter1");
    

    img1 = document.getElementById("imgFighter1");

        img1.innerHTML = `<img class="fighter1" src="img/${team1.nombre}.png" alt="fighter1" >`;