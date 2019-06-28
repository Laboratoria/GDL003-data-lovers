//INDEX
let dataLol =window.LOL.data;
let uno = Object.keys(window.LOL.data);



  for (let i in uno) {
    let imagen= dataLol[uno[i]].image;
    let mostrar =`<img src="imagen">`;
  //  let y = document.createElement("TD");
  //  y.setAttribute("id", "myTr");
  //document.getElementById("root").innerHTML +=  + "<br>";
    let x = document.createElement("TR")
    let t = document.createTextNode(uno[i] +" " + imagen );
    x.appendChild(t);
    //document.getElementById("myTable").appendChild(y);
    document.getElementById("myTable").appendChild(x);

  //  console.log(uno[i]);
 };*/

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
