//FUNCIONALIDAD
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


  const filterData= (data, condition) => {
    //const filter =(dataLol,chooseRol) =>{
      let filterNames =[];
      for (let propName in data) {
        let value = data[propName];
        let tags = value.tags;
        //console.log(tags);

        let tagsIndex = tags.indexOf(condition);//condition: 'Fighter'

        //if (attack >= 8 ){
        if (tagsIndex > -1){
          filterNames.push(propName);

          //console.log(propName);
         console.log(tagsIndex);
        }
      }
     // console.log(filterNames);
    return filterNames;
  };

  const sortData = () => {
    return 'sortData';
  };

  const computeStats = () => {
    return 'computeStats';
  };

  window.dataLovers = {
    filterData,
    sortData,
    computeStats
};


// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*
const example = () => {
  return 'example';
};

const filtrado = () => {
  return 'filtrado';
};

window.example = {
  example,
  filtrado
};
*/
