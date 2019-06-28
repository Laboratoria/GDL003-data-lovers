let buttonSearch = document.getElementById("search")
let name = document.querySelector(".name");
  buttonSearch.addEventListener("click", ()=>{
      let dataPokemon = window.dataLovers.filterByName(POKEMON.pokemon, name);
      document.getElementById("result").innerHTML = dataPokemon
  });