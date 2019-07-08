//Fuction to show all Pokemons
const buttonAllPokemon = document.getElementById('showAllPokemon');
const containerByType = document.getElementById('contentByType');
const container = document.getElementById('contentAll');

buttonAllPokemon.addEventListener("click", () => {
    container.innerHTML="";
    containerByType.innerHTML="";
  let all = buttonAllPokemon.value;
  let  allPokemonInformation = POKEMON.pokemon.forEach(infoPokemon => {
    const template = `
    <div id= "allPokemons" class="allPokemons"><br> 
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>Pokemon - ${infoPokemon.num}</p>
      <p>Tipo - ${infoPokemon.type}</p>
      <p>Caramelos - Caramelos - ${infoPokemon.candy_count}</p> <br>
    </div>
    `
    containerByType.innerHTML += template
  })
});

//Buttons for type
let grassFilterButton = document.getElementById('Grass');
let poisonFilterButton = document.getElementById('Poison');
let fireFilterButton = document.getElementById('Fire');
let flyingFilterButton = document.getElementById('Flying');
let waterFilterButton = document.getElementById('Water');
let bugFilterButton = document.getElementById('Bug');
let normalFilterButton = document.getElementById('Normal');
let electricFilterButton = document.getElementById('Electric');
let groundFilterButton = document.getElementById('Ground');
let fightingFilterButton = document.getElementById('Fighting');
let psychicFilterButton = document.getElementById('Psychic');
let rockFilterButton = document.getElementById('Rock');
let iceFilterButton = document.getElementById('Ice');
let ghostFilterButton = document.getElementById('Ghost');
let dragonFilterButton = document.getElementById('Dragon');

//Function to filter Pokemons by Grass type
grassFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";
  
  let grassType = grassFilterButton.value;
  console.log("allPokemonsCounter = " + POKEMON.pokemon.length); 
  
  let filterGrass = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Grass') != -1);
  });
  console.log(filterGrass); 
  
    filterGrass.forEach((infoPokemon) => {
    const template = `
    <div id= "tipeOfPokemons" class="tipeOfPokemons"><br><br>  
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>Pokemon - ${infoPokemon.num}</p>
      <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
    </div>
    `
      containerByType.innerHTML += template
    })
}); 

//Function to filter Pokemons by Poison type
poisonFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";
  
  let poisonType = poisonFilterButton.value;
  let filterPoison = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Poison') != -1);
  });
  console.log(filterPoison);

    filterPoison.forEach((infoPokemon) => {
    const template = `
    <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>Pokemon - ${infoPokemon.num}</p>
      <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
    </div>  
    `
    containerByType.innerHTML += template
    })
}); 

//Function to filter Pokemons by Fire type
fireFilterButton.addEventListener("click", () => {
    containerByType.innerHTML="";

  let fireType = fireFilterButton.value;
  let filterFire = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Fire') != -1);
  });
  console.log(filterFire); 

    filterFire.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
}); 

//Function to filter Pokemons by Flying type
flyingFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let flyingType = flyingFilterButton.value;
  let filterFlying = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Flying') != -1);
  });
    console.log(filterFlying);
    
    filterFlying.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Water type
waterFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let waterType = waterFilterButton.value;
  let filterWater = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Water') != -1);
  });
    console.log(filterWater); 

    filterWater.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Bug type
bugFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let bugType = bugFilterButton.value;
  let filterBug = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Bug') != -1);
  });
    console.log(filterBug); 

    filterBug.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Normal type
normalFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let normalType = normalFilterButton.value;
  let filterNormal = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Normal') != -1);
  });
    console.log(filterNormal); 

    filterNormal.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Electric type
electricFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let electricType = electricFilterButton.value;
  let filterElectric = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Electric') != -1);
  });
    console.log(filterElectric); 
    
    filterElectric.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Ground type
groundFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let groundType = groundFilterButton.value;
  let filterGround = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Ground') != -1);
  });
    console.log(filterGround); 

    filterGround.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Fighting type
fightingFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fightingType = fightingFilterButton.value;
  let filterFighting = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Fighting') != -1);
  });
    console.log(filterFighting); 

    filterFighting.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Psychic type
psychicFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let psychicType = psychicFilterButton.value;
  let filterPsychic = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Psychic') != -1);
  });
    console.log(filterPsychic); 

    filterPsychic.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Rock type
rockFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let rockType = rockFilterButton.value;
  let filterRock = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Rock') != -1);
  });
    console.log(filterRock); 

    filterRock.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Ice type
iceFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let iceType = iceFilterButton.value;
  let filterIce = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Ice') != -1);
  });
    console.log(filterIce); 

    filterIce.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Ghost type
ghostFilterButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let ghostType = ghostFilterButton.value;
  let filterGhost = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Ghost') != -1);
  });
    console.log(filterGhost); 

    filterGhost.forEach((infoPokemon) => {
      const template = `
      <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>Pokemon - ${infoPokemon.num}</p>
        <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
      </div>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Dragon type
dragonFilterButton.addEventListener("click", () => {
    containerByType.innerHTML="";

  let dragonType = dragonFilterButton.value;
  let filterDragon = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Dragon') != -1);
  });
  console.log(filterDragon); 

  filterDragon.forEach((infoPokemon) => {
    const template = `
    <div id= "tipeOfPokemons" class="tipeOfPokemons"><br> 
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>Pokemon - ${infoPokemon.num}</p>
      <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
    </div>
    `
    containerByType.innerHTML += template
  })
});

//Function to order Pokemons by Name
const alphabeticalOrderButton = document.getElementById("alphabeticalOrder")
const dataPokemon = POKEMON.pokemon;
alphabeticalOrderButton.addEventListener("click", () => {
    containerByType.innerHTML="";


  let orderAlphabetic = dataPokemon.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  console.log(orderAlphabetic);

  orderAlphabetic.forEach((infoPokemon) => {
    const template = `
    <div id= "allPokemons" class="allPokemons"><br> 
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>Pokemon - ${infoPokemon.num}</p>
      <p>Tipo - ${infoPokemon.type}</p>
      <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
    </div>
    `
    containerByType.innerHTML += template
  })
});

//Function to order Pokemons by Name
const numericOrderButton = document.getElementById("numericOrder")
const dataPokemon1 = POKEMON.pokemon;
numericOrderButton.addEventListener("click", () => {
    containerByType.innerHTML="";


  let orderByNumber = dataPokemon1.sort(function (a, b) {
    if (a.num > b.num) {
      return 1;
    }
    if (a.num < b.num) {
      return -1;
    }
    return 0;
  });
  console.log(orderByNumber);

  orderByNumber.forEach((infoPokemon) => {
    const template = `
    <div id= "allPokemons" class="allPokemons"><br> 
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>Pokemon - ${infoPokemon.num}</p>
      <p>Tipo - ${infoPokemon.type}</p>
      <p>Caramelos - ${infoPokemon.candy_count}</p> <br>
    </div>
    `
    containerByType.innerHTML += template
  })
});
/* 
//Function to search Pokemon by name
let buttonSearch = document.getElementById("search")
let searchByName = document.getElementById("pokemonName")
    buttonSearch.addEventListener("click", () =>{
      let searchName = searchByName.value; 
  let searchByPokemonName = POKEMON.pokemon.indexOf(searchName);
});   
  console.log(searchByPokemonName); */
