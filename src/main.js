//INDEX
document.getElementById("mapaRol").style.display='none'
let dataLol =LOL.data;

const toShow =() =>{
  let dataLol =LOL.data;
  for (let {{Aatrox}:propName} in dataLol) {
  //for (let propName in dataLol) {
    let value = dataLol[propName];
    let image = value.img;
    let title = value.title;
    let attack=  value.info.attack;
    let defense = value.info.defense;
    let magic = value.info.magic;
    let difficulty = value.info.difficulty;
    let tags = value.tags;
    //console.log(tags);
    
    let tagsIndex = tags.indexOf('Fighter');
    
    //let tagsFilter = tags.filter(word => word == 'Fighter');
    
    //if (attack >= 8 ){
    //if (tagsIndex > -1){
    //console.log(propName);
   // console.log(tagsIndex);

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
  }
};

const showCards =() =>{
  let dataLol =LOL.data;
  //let resFilter = filterData(dataLol, 'Fighter');
  //let propName = filterName;
  for (let propName in dataLol) {
    let value = dataLol[propName];
    let image = value.img;
    let title = value.title;
    let attack=  value.info.attack;
    let defense = value.info.defense;
    let magic = value.info.magic;
    let difficulty = value.info.difficulty;
    let tags = value.tags;
    let tagsIndex = tags.indexOf('Fighter');
  //  console.log(value);

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
  }
};

document.getElementById("champions").addEventListener("click",toShow);

const mapByRol=()=> {
document.getElementById("mapaRol").style.display= 'block';
document.getElementById("galeria").style.display= "none"

  const pushBotton=()=>{
  //let pushBottonTop=document.getElementById("TOP").value;
   //pushBottonTop= 1;
   
   let resFilter = filterData(dataLol, 'Fighter');
   
   console.log(resFilter);
   //let filterCards = showCards(resFilter);
   ///let filterCards = showCards(resFilter);
   //showCards(resFilter);
   //console.log(resFilter);
   
   //document.getElementById("TOP").value= filter(dataLol, 'Fighter');    
   //console.log(pushBottonTop);
  }


document.getElementById("TOP").addEventListener("click",pushBotton);
//document.getElementById("TOP").addEventListener("click",showCards);
};

document.getElementById("rol").addEventListener("click",mapByRol);
