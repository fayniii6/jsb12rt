"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

// Escribe aquí tu código
function checkAge(name, age) {
  if (age >= 18) {
    console.log(`${name} es mayor de edad`);
  } else {
    console.log(`${name} es menor de edad`);
  }
}

for (const nombre in people) {
  //console.log(nombre, people[nombre]);

  checkAge(nombre, people[nombre]);
}
