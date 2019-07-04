//INDEX
document.getElementById("mapaRol").style.display='none'

const toShow =() =>{
  let dataLol =LOL.data;
  for (let propName in dataLol) {
    let value = dataLol[propName];
    let image = value.img;
    let title = value.title;
    let attack=  value.info.attack;
    let defense = value.info.defense;
    let magic = value.info.magic;
    let difficulty = value.info.difficulty;
    let tags = value.tags;
    console.log(value);
    //console.log(tags);

    //let tagsIndex = tags.indexOf('Fighter');

    //let tagsFilter = tags.filter(word => word == 'Fighter');

    //if (attack >= 8 ){
    //if (tagsIndex > -1){
    //console.log(propName);
    //console.log(tagsIndex);

    document.getElementById("galeria").innerHTML +=
    " " +
     `
    <div class="boxesContainer">
        <div class="cardBox">
            <div class="card">
              <div class="front">
                <h3 id= "picture"><img src="${image}"></h3>
                <h3>${propName}</h3>
              </div>
            <div class="back">
              <p>${propName}</p>
              <p>${title}</p>
              <p>ataque: ${attack}</p>
              <p>defensa: ${defense}</p>
              <p>magia: ${magic}</p>
              <p>dificultad: ${difficulty}</p>
            </div>
          </div>
        </div>
      </div>`;
    //};
  };
};

document.getElementById("champions").addEventListener("click",toShow)

const mapByRol=()=> {
document.getElementById("mapaRol").style.display= 'block';
document.getElementById("galeria").style.display= "none"

}

document.getElementById("rol").addEventListener("click",mapByRol);


const filterDta =()=>{
  let dataLol =LOL.data;
  for (let propName in dataLol){
    let value = dataLol[propName];
    let tags = value.tags;
    let tagsIndex = tags.indexOf('Fighter')
    if (tagsIndex > -1){
      console.log(propName);
      console.log(tagsIndex);

    }
  }
}

document.getElementById("TOP").addEventListener("click",filterDta);
