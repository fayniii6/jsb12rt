"use strict";

/* 
Edita el archivo index.js para añadir estas variables similares a las del ejercicio anterior:

nombre de tipo String y con el valor "Marta"

edad de tipo Number y con el valor 27

A continuación, crea los condicionales necesarios para imprimir por consola la frase correcta de la siguientes:

A Marta le corresponde el descuento infantil (menores de 12 años)

A Marta le corresponde el descuento juvenil (menores de 30 años)

A Marta le corresponde el descuento de jubilados (mayores de 60 años)

A Marta no le corresponde ningún descuento

*/

let nombre = "Marta";
let edad = 27;

if (edad < 12) {
  console.log(
    `A ${nombre} le corresponde el descuento infantil (menores de 12 años)`
  );
} else if (edad < 30) {
  console.log(
    `A ${nombre} le corresponde el descuento juvenil (menores de 30 años)`
  );
} else if (edad > 60) {
  console.log(
    `A ${nombre} le corresponde el descuento de jubilados (mayores de 60 años)`
  );
} else {
  console.log(`A ${nombre} no le corresponde ningún descuento`);
}
