//Fuction to show all Pokemons
let buttonAllPokemon = document.getElementById('showAllPokemon');
const container = document.getElementById('contentAll');

buttonAllPokemon.addEventListener("click", () => {
    container.innerHTML="";
  let all = buttonAllPokemon.value;
  let  allPokemonInformation = POKEMON.pokemon.forEach(allInformation => {
    container.innerHTML += '<a href="#info">'+ allInformation.num + allInformation.name +allInformation.type + '</a><img src="'+allInformation.img+'">';
  });
});

//Buttons for type
let grassFilerButton = document.getElementById('Grass');
let poisonFilerButton = document.getElementById('Poison');
let fireFilerButton = document.getElementById('Fire');
let flyingFilerButton = document.getElementById('Flying');
let waterFilerButton = document.getElementById('Water');
let bugFilerButton = document.getElementById('Bug');
let normalFilerButton = document.getElementById('Normal');
let electricFilerButton = document.getElementById('Electric');
let groundFilerButton = document.getElementById('Ground');
let fightingFilerButton = document.getElementById('Fighting');
let psychicFilerButton = document.getElementById('Psychic');
let rockFilerButton = document.getElementById('Rock');
let iceFilerButton = document.getElementById('Ice');
let ghostFilerButton = document.getElementById('Ghost');
let dragonFilerButton = document.getElementById('Dragon');

//Function to filter Pokemons by Grass type
const containerByType = document.getElementById('contentByType');
grassFilerButton.addEventListener("click", () => {
    containerByType.innerHTML="";

  let grassType = grassFilerButton.value;
  console.log("allPokemonsCounter = " +POKEMON.pokemon.length); 

  let filterGrass = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Grass') != -1);
  });
    console.log(filterGrass); 
    containerByType.innerHTML += '<a href="#info">'+ filterGrass.num + filterGrass.name + filterGrass.type + '</a><img src="'+ filterGrass.img+'">';
}); 

//Function to filter Pokemons by Poison type
poisonFilerButton.addEventListener("click", () => {
    containerByType.innerHTML="";

  let poisonType = poisonFilerButton.value;
  let filterPoison = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Poison') != -1);
  });
    console.log(filterPoison); 
}); 

//Function to filter Pokemons by Fire type
fireFilerButton.addEventListener("click", () => {
    containerByType.innerHTML="";

  let fireType = fireFilerButton.value;
  let filterFire = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Fire') != -1);
  });
    console.log(filterFire); 
}); 

//Function to filter Pokemons by Flying type
flyingFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = flyingFilerButton.value;
  let filterflying = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Flying') != -1);
  });
    console.log(filterflying); 
}); 

//Function to filter Pokemons by Water type
waterFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = waterFilerButton.value;
  let filterWater = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Water') != -1);
  });
    console.log(filterWater); 
}); 

//Function to filter Pokemons by Bug type
bugFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = bugFilerButton.value;
  let filterBug = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Bug') != -1);
  });
    console.log(filterBug); 
}); 

//Function to filter Pokemons by Normal type
normalFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = normalFilerButton.value;
  let filterNormal = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Normal') != -1);
  });
    console.log(filterNormal); 
}); 

//Function to filter Pokemons by Electric type
electricFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = electricFilerButton.value;
  let filterElectric = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Electric') != -1);
  });
    console.log(filterElectric); 
}); 

//Function to filter Pokemons by Ground type
groundFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = groundFilerButton.value;
  let filterGround = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Ground') != -1);
  });
    console.log(filterGround); 
}); 

//Function to filter Pokemons by Fighting type
fightingFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = fightingFilerButton.value;
  let filterFighting = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Fighting') != -1);
  });
    console.log(filterFighting); 
}); 

//Function to filter Pokemons by Psychic type
psychicFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = psychicFilerButton.value;
  let filterPsychic = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Psychic') != -1);
  });
    console.log(filterPsychic); 
}); 

//Function to filter Pokemons by Rock type
rockFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = rockFilerButton.value;
  let filterRock = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Rock') != -1);
  });
    console.log(filterRock); 
}); 

//Function to filter Pokemons by Ice type
iceFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = iceFilerButton.value;
  let filterIce = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Ice') != -1);
  });
    console.log(filterIce); 
}); 

//Function to filter Pokemons by Ghost type
ghostFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fireType = ghostFilerButton.value;
  let filterGhost = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Ghost') != -1);
  });
    console.log(filterGhost); 
}); 

//Function to filter Pokemons by Dragon type
dragonFilerButton.addEventListener("click", () => {
    containerByType.innerHTML="";

  let fireType = dragonFilerButton.value;
  let filterDragon = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Dragon') != -1);
  });
  console.log(filterDragon); 
}); 

//Function to search Pokemon by name
let buttonSearch = document.getElementById("search")
let searchByName = document.getElementById("pokemonName")
    buttonSearch.addEventListener("click", () =>{
      let searchName = searchByName.value; 
  let searchByPokemonName = POKEMON.pokemon.indexOf(searchName);
});   
  console.log(searchByPokemonName);

/*
//Function to order Pokemons by Name
let alphabeticalOrderButton = document.getElementById("alphabeticalOrder")

  let orderPokemonByName = POKEMON.pokemon.sort(pokemon(prev, next) => {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
      return -1;
    }
    return 0;
  console.log(orderPokemonByName);
};

let numericOrderButton = document.getElementById("numericOrder")

  let orderPokemonByNumber = POKEMON.pokemon.sort(pokemon(prev, next) => {
    if (prev.num > next.num) {
      return 1;
    }
    if (prev.num < next.num) {
      return -1;
    }
    return 0;
  };
  console.log(orderPokemonByNumber); */
