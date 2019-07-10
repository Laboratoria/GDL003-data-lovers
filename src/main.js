//Fuction to show all Pokemons
const buttonAllPokemon = document.getElementById('showAllPokemon');
const containerByType = document.getElementById('contentByType');
const container = document.getElementById('contentAll');

buttonAllPokemon.addEventListener("click", () => {
        container.innerHTML="";
        containerByType.innerHTML="";
        dataPokemon.forEach(infoPokemon => {
        const template = `
        <div id= "allPokemons" class="allPokemons"><br> 
          <p>${infoPokemon.name}</p>
          <img src="${infoPokemon.img}" alt="pokemon picture"/>
          <p>Pokemon - ${infoPokemon.num}</p>
          <p>Tipo - ${infoPokemon.type}</p>
          <p>Caramelos - Caramelos - ${infoPokemon.candy_count}</p> <br>
        </div>
        `
        container.innerHTML += template
        })
});

//Buttons for type
let buttonsTypePokemon = document.querySelectorAll('.buttonByType');
console.log(buttonsTypePokemon);

buttonsTypePokemon.forEach ((typePokemon) => {
    typePokemon.addEventListener ("click", (type) => {
        container.innerHTML="";
        containerByType.innerHTML="";
        console.log(type.target.value)
        //Function to filter Pokemons by type
        filterPokemon(dataPokemon, type.target.value).forEach((infoPokemon) => {
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

});

//Function to order Pokemons by Name
const alphabeticalOrderButton = document.getElementById("alphabeticalOrder")
alphabeticalOrderButton.addEventListener("click", () => {
    container.innerHTML="";
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

//Function to order Pokemons by Number
const numericOrderButton = document.getElementById("numericOrder")
numericOrderButton.addEventListener("click", () => {
    container.innerHTML="";
    containerByType.innerHTML="";

    let orderByNumber = dataPokemon.sort(function (a, b) {
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