"use strict";

let nombre = "Marta";

let edad = 27;

let color = "púrpura";

///////////////
//OPCION 1

console.log(
  "Hola, me llamo " +
    nombre +
    ", tengo " +
    edad +
    " años y mi color favorito es el " +
    color +
    "."
);

//////////////
//OPCION 2

console.log(
  `Hola, me llamo ${nombre}, tengo ${edad} años y mi color favorito es el ${color}.`
);

////////////
//OPCION 3

let str =
  "Hola, me llamo " +
  nombre +
  ", tengo " +
  edad +
  " años y mi color favorito es el " +
  color +
  ".";

console.log(str);

////////////
//OPCION 4

let template = `Hola, me llamo ${nombre}, tengo ${edad} años y mi color favorito es el ${color}.`;

console.log(template);

/////////////
// OTRA VERSION (no es lo mismo)

console.log(
  "Hola, me llamo",
  nombre,
  ", tengo",
  edad,
  "años y mi color favorito es el",
  color,
  "."
);
