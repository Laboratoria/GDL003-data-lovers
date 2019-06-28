// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
//  return "example";
//};

//window.example = example

window.dataLovers = {

   filterByName: (data, name) => {
    let namePokemon ="";
      if (name.value == "name"){
        let filterName = data.filter(data => data>name);
        console.log(filterName);
      }
    }   
        //for (let pokemon = 0;pokemon<data.lenght;pokemon++){ 
        //let filterName=data[pokemon].name;
        //namePokemon+=pokemon+'<br>';
  
/*  getPokemonByNum: number => {
    return pokemonData.array.find(p => p.number === number);
  },
  getPokemonByTypeFilter: type => {
    return pokemonData.array.filter(p => p.type.indexOf(type) > -1);
  },
  getPokemonByWeaknessesFilter: weaknesses => {
    return pokemonData.array.filter(p => p.weaknesses.indexOf(weaknesses) > -1);
  }
};*/}