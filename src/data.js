

//Get data by JS
const dataPokemon = POKEMON.pokemon


//Function to filter data:
const filterPokemon = (dataPokemon, type) => {
  console.log(type)
  return dataPokemon.filter((pokemon) => pokemon.type.includes(type));
};