//Funciones

//Selección de personajes

let choose1 = (nPokemon) => {

    if(team1 == ""){
        team1 = allPokemons[nPokemon];
        let pokemonFirst = document.getElementById(nPokemon);
        let dataPokemon = document.getElementById("data" + 1);
        pokemonFirst.onclick = "";//Bloqueo personaje
        pokemonFirst.classList.add("selected");
        dataPokemon.innerHTML = `${team1.name}`;
        
        
    } else if( team2 == ""){
        team2 = allPokemons[nPokemon];
        let pokemonFirst = document.getElementById(nPokemon);
        let dataPokemon = document.getElementById("data" + 2);
        pokemonFirst.onclick = "";//bloqueo personaje
        pokemonFirst.classList.add("selected");
        dataPokemon.innerHTML = `${team2.name}`;        

        setTimeout(() => {
            changeScreen(3);
            displayGame();
        }, 2500);
    }
}

//Limpieza del juego antes de inicio

const cleanGame = () => {

        window.location.reload();
      
    changeScreen(1);
}

//Cambio de pantalla 

const changeScreen = (change) => {

    let selectedScreen = "screen" + change;

    let arrayScreens = ["screen1", "screen2", "screen3", "screen4"];

    //Le decimos a filter que si encuentra el valor que le pasamos en el array, no lo incluya
    arrayScreens = arrayScreens.filter(val => !selectedScreen.includes(val));
    //Le ponemos display "block" a la pantalla deseada
    document.getElementById(selectedScreen).style.display = "block";
    //Recorremos el arrayPantallas para poner el display:none
    for(let screen of arrayScreens) {
        document.getElementById(screen).style.display = "none";
    }

}

//Display Pokemons elegidos en screen3
let img1 = document.getElementById("imgFighter1");
let img2 = document.getElementById("imgFighter2");

let statsTeam1 = document.getElementById("stats1");
let statsTeam2 = document.getElementById("stats2");

let winner = document.getElementById("winner");
   
const displayGame= () => {
        img1.innerHTML = `<img class="fighter1" src="img/${team1.name}.png" alt="fighter1" >`;
        img2.innerHTML = `<img class="fighter2" src="img/${team2.name}.png" alt="fighter2" >`;

        

        statsTeam1.innerHTML = `<div class="lifeBar"><div id="lifeBar1"></div>`;
        statsTeam2.innerHTML = `<div class="lifeBar"><div id="lifeBar2"></div>`;
}

//Funcion pelea

const fight= () => {

    team1.atack();
    team2.atack();
    
    

    if(team1.life <= 0) {  

        changeScreen(4);
        
        winner.innerHTML = `<img class="winner" src="img/winner.png" alt="winner" > </br> The winner is Team 2 with ${team2.name}`;
    } 
    if(team2.life <= 0) {

        changeScreen(4);

        winner.innerHTML = `<img class="winner" src="img/winner.png" alt="winner" > </br> The winner is Team 1 with ${team1.name}`;
    }

    statsTeam1.innerHTML = `<div class="lifeBar"><div id="lifeBar1"></div>`;
    statsTeam2.innerHTML = `<div class="lifeBar"><div id="lifeBar2"></div>`;
    document.getElementById("lifeBar1").style.width = `${team1.life}`+"%";
    document.getElementById("lifeBar2").style.width = `${team2.life}`+"%";
}
    
