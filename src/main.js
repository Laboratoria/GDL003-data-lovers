let buttonAllPokemon = document.getElementById('showAllPokemon');
const container = document.getElementById('contentAll');
  buttonAllPokemon.addEventListener("click", () => {
    container.innerHTML="";
  let all = buttonAllPokemon.value;
  let  allPokemonInformation = POKEMON.pokemon.forEach(allInformation => {
    console.log(allInformation);
    container.innerHTML += allInformation.num + allInformation.name + allInformation.image +allInformation.type;
  });
});

// tipos de pokemon
let typeGrass = document.getElementById('Grass');
let typePoison = document.getElementById('Poison');
let typeFire = document.getElementById('Fire');
let typeFlying = document.getElementById('Flying');
let typeWater= document.getElementById('Water');
let typeBug = document.getElementById('Bug');
let typeNormal = document.getElementById('Normal');
let typeElectric = document.getElementById('Electric');
let typeGround = document.getElementById('Ground');
let typeFighting = document.getElementById('Fighting');
let typePsychic = document.getElementById('Psychic');
let typeRock = document.getElementById('Rock');
let typeIce = document.getElementById('Ice');
let typeGhost = document.getElementById('Ghost');
let typeDragon = document.getElementById('Dragon');

//let buttonSearch = document.getElementById("search")
 // buttonSearch.addEventListener("click", ()=>{
   //   let dataPokemon = window.dataLovers.filterPokemon();
     // document.getElementById("result").innerHTML = dataPokemon
 // });