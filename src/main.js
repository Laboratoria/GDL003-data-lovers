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
  };
};

document.getElementById("champions").addEventListener("click",toShow)

const mapByRol=()=> {
document.getElementById("mapaRol").style.display= 'block';
document.getElementById("galeria").style.display= "none"

  const pushButton=()=>{
  let pushButtonTop= document.getElementById("TOP").value;
  if (pushButton===Str) {
    console.log(pushButtonTop);
  }
  let pushButtonMid=document.getElementById("MID").value;
  console.log(pushButtonTop);
  console.log(pushButtonMid);



  }
document.getElementById("TOP").addEventListener("click",pushButton);
document.getElementById("MID").addEventListener("click",pushButton);

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
