//INDEX
let dataLol =LOL.data;
//let character = Object.keys(window.LOL.data);
console.log(dataLol);



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
  console.log(image);
  console.log(title);
  console.log(attack);
  console.log(defense);
  console.log(magic);
  console.log(difficulty);


  //let information = dataLol[character[i]].info;
 // console.log(information);
  //let infoLol=  Object.keys(information);
  //console.log(infoLol);

 document.getElementById("galeria").innerHTML += 
  " " +
  `<dl>
  <dt><img src="${image}"></dt>
  <dd>${propName}</dd>
  <dt>${title}</dt>
  <dd>ataque: ${attack}</dd>
  <dd>defensa: ${defense}</dd>
  <dd>magia: ${magic}</dd>
  <dd>dificultad: ${difficulty}</dd>
  </dl>` ;
 //document.getElementById("galeria").innerHTML +=  " " + `<img src="${image}">`+ character[i] + " ";
   //document.querySelector(.mosaico).innerHTML +=  " " + `<img src="${image}">`+ uno[i] + "<br>" ;
  //  console.log(uno[i]);
};

/*
  for (let i in uno) {
    let imagen= dataLol[uno[i]].img;
    let showImg = "<img id="face" width="50" height="50">";
    let faceImg = document.getElementById("face").src = imagen;
    console.log(faceImg);
    let y = document.createElement("TD");
    y.setAttribute("id", "myTr");
  //  document.getElementById("root").innerHTML += uno[i] + "<br>";
    let x = document.createElement("TR")
    let t = document.createTextNode(uno[i] + "\n" + imagen + "\n");
    x.appendChild(t);
    document.getElementById("myTable").appendChild(y);
    document.getElementById("myTr").appendChild(x);

  //  console.log(uno[i]);
 };*/

/* for(let i=0; i<=uno.length; i++){

let dataLol =window.LOL.data;
let uno = Object.keys(window.LOL.data);

  for (let x in uno) {
    let imagen= dataLol[uno[x]].img;
    document.getElementById("root").innerHTML += uno[x] +"<br>" +  imagen + "<br>";
console.log(x);
console.log(imagen);
  };

//document.getElementById('boton').addEventListener('click',cargarJson);

/*function cargarJson(){
  fetch("./data/lol/lol.json")
  .then(function(res) {
   return res.json();
  })
  .then(function(data){
    console.log(data);
  })
}
*/



  /* for(let i=0; i<=uno.length; i++){
   let vista  = uno[i];
   let muestra=JSON.stringify(vista);
  document.write(vista+'<br>');
*/
  //console.log(uno[i]);
  //console.log(vista);
 // console.log(muestra);
//};

//dataLol =window.LOL.data;
//let x = dataLol;
//document.getElementById("root").innerHTML = x;
//console.log(x);
  //let datos=window.LOL.data;
  //let muestra=JSON.stringify(datos); //volver los datos de un arreglo en string
  //let nombre=JSON.parse(muestra);

  //console.log(Object.keys(window.LOL.data));
  //console.log(muestra);
  //console.log(nombre.Aatrox.name);
