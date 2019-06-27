//INDEX
let dataLol =window.LOL.data;
let uno = Object.keys(window.LOL.data);

  for (let i in uno) {
    let imagen= dataLol[uno[i]].img;
    let y = document.createElement("TD");
    y.setAttribute("id", "myTr");
  //  document.getElementById("root").innerHTML += uno[i] + "<br>";
    let x = document.createElement("TR")
    let t = document.createTextNode(uno[i] + "\n" + imagen + "\n");
    x.appendChild(t);
    document.getElementById("myTable").appendChild(y);
    document.getElementById("myTr").appendChild(x);

  //  console.log(uno[i]);

 };
/* for(let i=0; i<=uno.length; i++){
<<<<<<< HEAD
=======

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
>>>>>>> 2f0a9e210742a4ab7c53754842f8c889c1057bbe
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
