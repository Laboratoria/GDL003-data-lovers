//Fuction to show all Pokemons
const buttonAllPokemon = document.getElementById('showAllPokemon');
const container = document.getElementById('contentAll');

buttonAllPokemon.addEventListener("click", () => {
    container.innerHTML="";
  let all = buttonAllPokemon.value;
  let  allPokemonInformation = POKEMON.pokemon.forEach(infoPokemon => {
    const template = `
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>${infoPokemon.num}</p>
      <p>${infoPokemon.type}</p>
      <p>${infoPokemon.candy_count}</p> <br>
    `
    containerByType.innerHTML += template
  })
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
  console.log("allPokemonsCounter = " + POKEMON.pokemon.length); 
  
  let filterGrass = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Grass') != -1);
  });
  console.log(filterGrass); 
  
    filterGrass.forEach((infoPokemon) => {
    const template = `
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>${infoPokemon.num}</p>
      <p>${infoPokemon.candy_count}</p> <br>
    `
      containerByType.innerHTML += template
    })
}); 

//Function to filter Pokemons by Poison type
poisonFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";
  
  let poisonType = poisonFilerButton.value;
  let filterPoison = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Poison') != -1);
  });
  console.log(filterPoison);

    filterPoison.forEach((infoPokemon) => {
    const template = `
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>${infoPokemon.num}</p>
      <p>${infoPokemon.candy_count}</p> <br>
    `
    containerByType.innerHTML += template
    })
}); 

//Function to filter Pokemons by Fire type
fireFilerButton.addEventListener("click", () => {
    containerByType.innerHTML="";

  let fireType = fireFilerButton.value;
  let filterFire = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Fire') != -1);
  });
  console.log(filterFire); 

    filterFire.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
}); 

//Function to filter Pokemons by Flying type
flyingFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let flyingType = flyingFilerButton.value;
  let filterflying = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Flying') != -1);
  });
    console.log(filterflying);
    
    filterFlying.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Water type
waterFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let waterType = waterFilerButton.value;
  let filterWater = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Water') != -1);
  });
    console.log(filterWater); 

    filterWater.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Bug type
bugFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let bugType = bugFilerButton.value;
  let filterBug = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Bug') != -1);
  });
    console.log(filterBug); 

    filterBug.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Normal type
normalFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let normalType = normalFilerButton.value;
  let filterNormal = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Normal') != -1);
  });
    console.log(filterNormal); 

    filterNormal.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Electric type
electricFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let electricType = electricFilerButton.value;
  let filterElectric = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Electric') != -1);
  });
    console.log(filterElectric); 
    
    filterElectric.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Ground type
groundFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let groundType = groundFilerButton.value;
  let filterGround = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Ground') != -1);
  });
    console.log(filterGround); 

    filterGround.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Fighting type
fightingFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let fightingType = fightingFilerButton.value;
  let filterFighting = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Fighting') != -1);
  });
    console.log(filterFighting); 

    filterfighting.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Psychic type
psychicFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let psychicType = psychicFilerButton.value;
  let filterPsychic = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Psychic') != -1);
  });
    console.log(filterPsychic); 

    filterpsychic.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Rock type
rockFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let rockType = rockFilerButton.value;
  let filterRock = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Rock') != -1);
  });
    console.log(filterRock); 

    filterRock.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Ice type
iceFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let iceType = iceFilerButton.value;
  let filterIce = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Ice') != -1);
  });
    console.log(filterIce); 

    filterIce.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Ghost type
ghostFilerButton.addEventListener("click", () => {
  containerByType.innerHTML="";

  let ghostType = ghostFilerButton.value;
  let filterGhost = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Ghost') != -1);
  });
    console.log(filterGhost); 

    filterGhost.forEach((infoPokemon) => {
      const template = `
        <p>${infoPokemon.name}</p>
        <img src="${infoPokemon.img}" alt="pokemon picture"/>
        <p>${infoPokemon.num}</p>
        <p>${infoPokemon.candy_count}</p> <br>
      `
      containerByType.innerHTML += template
    })
});

//Function to filter Pokemons by Dragon type
dragonFilerButton.addEventListener("click", () => {
    containerByType.innerHTML="";

  let dragonType = dragonFilerButton.value;
  let filterDragon = POKEMON.pokemon.filter(pokemon => { 
    return (pokemon.type.indexOf('Dragon') != -1);
  });
  console.log(filterDragon); 

  filterDragon.forEach((infoPokemon) => {
    const template = `
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>${infoPokemon.num}</p>
      <p>${infoPokemon.candy_count}</p> <br>
    `
    containerByType.innerHTML += template
  })
});

//Function to order Pokemons by Name
const alphabeticalOrderButton = document.getElementById("alphabeticalOrder")
const dataPokemon = POKEMON.pokemon;
alphabeticalOrderButton.addEventListener("click", () => {

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
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>${infoPokemon.num}</p>
      <p>${infoPokemon.candy_count}</p> <br>
    `
    containerByType.innerHTML += template
  })
});

//Function to order Pokemons by Name
const numericOrderButton = document.getElementById("numericOrder")
const dataPokemon1 = POKEMON.pokemon;
numericOrderButton.addEventListener("click", () => {
  
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
      <p>${infoPokemon.name}</p>
      <img src="${infoPokemon.img}" alt="pokemon picture"/>
      <p>${infoPokemon.num}</p>
      <p>${infoPokemon.candy_count}</p> <br>
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
