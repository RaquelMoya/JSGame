//Funciones


let choose1 = (nPokemon) => {

    if(team1 == ""){
        team1 = allPokemons[nPokemon];
        let pokemonPrimero = document.getElementById(nPokemon);
        let datosPokemon = document.getElementById("data" + 1);
        pokemonPrimero.onclick = "";//Bloqueo personaje
        pokemonPrimero.classList.add("selected");
        datosPokemon.innerHTML = `${team1.nombre}`;
        console.log("selected team1");
        
    } else if( team2 == ""){
        team2 = allPokemons[nPokemon];
        let pokemonPrimero = document.getElementById(nPokemon);
        let datosPokemon = document.getElementById("data" + 2);
        pokemonPrimero.onclick = "";//bloqueo personaje
        pokemonPrimero.classList.add("selected");
        datosPokemon.innerHTML = `${team2.nombre}`;
        console.log("selected team2");
        

        setTimeout(() => {
            cambiaPantalla(3);
            displayGame();
        }, 2500);
    }
}

const cleanGame = () => {
    team1 = "";
    team2 = "";
    ganador = "";

    cambiaPantalla(1);
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

//Display Pokemons elegidos en screen3
let img1 = document.getElementById("imgFighter1");
let img2 = document.getElementById("imgFighter2");

let statsTeam1 = document.getElementById("stats1");
let statsTeam2 = document.getElementById("stats2");

let winner = document.getElementById("winner");
   
const displayGame= () => {
        img1.innerHTML = `<img class="fighter1" src="img/${team1.nombre}.png" alt="fighter1" >`;
        img2.innerHTML = `<img class="fighter2" src="img/${team2.nombre}.png" alt="fighter2" >`;

        statsTeam1.innerHTML = `<div class="life">Vida: <br>${team1.vida}</dic>`;
        statsTeam2.innerHTML = `<div class="life">Vida: <br>${team2.vida}</dic>`;
}

//Funcion pelea
const pelea= () => {
    
    if(team1.vida <= 0) {
        ganador = team1;

        console.log("ganador team1");

        cambiaPantalla(4);
        
        winner.innerHTML = `${team1.nombre}`;
    } 
    if(team2.vida <= 0) {
        ganador = team2;

        console.log("ganador team2");
        cambiaPantalla(4);

        winner.innerHTML = `${team2.nombre}`;
    }
    
    team1.atacar();
    team2.atacar();
    

    statsTeam1.innerHTML = `<div class="life">Vida: <br>${team1.vida}</dic>`;
    statsTeam2.innerHTML = `<div class="life">Vida: <br>${team2.vida}</dic>`;
}
    
