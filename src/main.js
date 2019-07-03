//INDEX
let dataLol =LOL.data;


for (let propName in dataLol) {
  //let image= dataLol[character[i]].img;
 // let myImage = new Image(100, 200);
  //myImage.src = image;
  //console.log(myImage);
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
                <h1>${propName}</h1>
              </div>
            <div class="back">
              <h3>${propName}</h3>
              <p>${title}</p>
              <p>ataque: ${attack}</p>
              <p>defensa: ${defense}</p>
              <p>magia: ${magic}</p>
              <p>dificultad: ${difficulty}</p>
            </div>
          </div>
        </div>
      </div>`

