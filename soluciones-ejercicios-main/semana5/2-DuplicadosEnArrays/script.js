"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

// Escribe aquí tu código

function eliminarDuplicados(array) {
  //Creamos nuevo array
  let newArray = [];

  //Por cada elemento del array...
  for (let el of array) {
    //Si NO está en el nuevo...
    if (!newArray.includes(el)) {
      console.log("no está");

      //lo añadimos
      newArray.push(el);
    }
  }

  //devolvemos el array
  return newArray;
}

console.log(eliminarDuplicados(names));

/////////////////////////

function eliminarFilter(array) {
  //Filtramos el array original dejando solo aquellos elementos en los que coincide su indice con su indexOf (la primera vez que aparecen)
  return array.filter((el, i) => i === array.indexOf(el));
}

console.log(eliminarFilter(names));

/////////////////////////

function eliminarIndex(array) {
  //Cremos nuevo array
  let newArray = [];

  //Recorremos el array
  for (let i = 0; i < array.length; i++) {
    console.log(i, array[i], array.indexOf(array[i]));

    //Si el indice coincide con el indexOf del elemento de ese indice...
    if (i === array.indexOf(array[i])) {
      //lo añadimos al nuevo
      newArray.push(array[i]);
    }
  }

  //devolvemos el nuevo array
  return newArray;
}

console.log(eliminarIndex(names));
