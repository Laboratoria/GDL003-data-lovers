//INDEX
let dataLol =window.LOL.data;
let uno = Object.keys(window.LOL.data);

  for (let i in uno) {
    var y = document.createElement("TD");
    y.setAttribute("id", "myTr");
  //  document.getElementById("root").innerHTML += uno[i] + "<br>";
    var x = document.createElement("TR")
    var t = document.createTextNode(uno[i]+"\n");
    x.appendChild(t);
    document.getElementById("myTable").appendChild(y);
    document.getElementById("myTr").appendChild(x);

  //  console.log(uno[i]);

 };
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
