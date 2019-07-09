//INDEX
document.getElementById("mapaRol").style.display='none';

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

const showCards =(filterRol) =>{
  let dataLol =LOL.data;
  let resFilter = window.dataLovers.filterData(dataLol, filterRol);
  resFilter.forEach(element => {
    //console.log(element);
    for (let propName in dataLol) {
      if(propName == element){
      let value = dataLol[propName];
      let image = value.img;
      let title = value.title;
      let attack=  value.info.attack;
      let defense = value.info.defense;
      let magic = value.info.magic;
      let difficulty = value.info.difficulty;

      document.getElementById("galeriaFiltro").innerHTML +=
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
    }
  });
};

document.getElementById("champions").addEventListener("click",toShow);

const mapByRol=()=> {
document.getElementById("mapaRol").style.display= 'block';
document.getElementById("galeria").style.display= "none";

 const pushBottonTOP=()=>{
   showCards('Fighter');
  };
 const pushBottonMID=()=>{
   showCards('Tank');
  };
  const pushBottonJUNGLE=()=>{
   showCards('Mage');
  };
  const pushBottonBOT=()=>{
   showCards('Assassin');
  };
  const pushBottonSUPPORT=()=>{
   showCards('Support');
  };
  document.getElementById("TOP").addEventListener("click",pushBottonTOP);
  document.getElementById("MID").addEventListener("click",pushBottonMID);
  document.getElementById("JUNGLE").addEventListener("click",pushBottonJUNGLE);
  document.getElementById("BOT").addEventListener("click",pushBottonBOT);
  document.getElementById("SUPPORT").addEventListener("click",pushBottonSUPPORT);
};

document.getElementById("rol").addEventListener("click",mapByRol);
