//INDEX

let uno = Object.keys(window.LOL.data);

  for(let i=0; i<=uno.length; i++){
    let vista  = uno[i];
    let muestra=JSON.stringify(vista);
  document.write(vista+'<br>');

  //console.log(uno[i]);
  //console.log(vista);
  console.log(muestra);
};

  //let datos=window.LOL.data;
  //let muestra=JSON.stringify(datos); //volver los datos de un arreglo en string
  //let nombre=JSON.parse(muestra);

  //console.log(Object.keys(window.LOL.data));
  //console.log(muestra);
  //console.log(nombre.Aatrox.name);
