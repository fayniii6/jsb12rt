/**
 * Utiliza los métodos funcionales de array para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];

/* 1. Obtén la suma total de todas las edades de las personas. */
console.log("Ejercicio 1");

let edadTotal = persons.reduce((acc, person) => acc + person.age, 0);

console.log(edadTotal);

///////////////////////

/* 2. Obtén la suma total de todas las edades de las personas francesas. */
console.log("Ejercicio 2");

//Hacemos un array dejando solo las perosnas francesas
let franceses = persons.filter((person) => person.country === "FR");

//Calculamos la edad total de ese array
let edadTotalFranceses = franceses.reduce((acc, person) => acc + person.age, 0);

console.log(edadTotalFranceses);

//lo mismo en una linea
let edadFranceses1linea = persons
  .filter((person) => person.country === "FR")
  .reduce((acc, person) => acc + person.age, 0);

console.log(edadFranceses1linea);

////////////////////////////

/* 3. Obtén un array con el nombre de todas las mascotas. */
console.log("Ejercicio 3");

let nombresMascotas = persons.map((person) => person.pet.name);

console.log(nombresMascotas);

/* 4. Obtén un array con las personas que tengan gato. */
console.log("Ejercicio 4");

let conGato = persons.filter((person) => person.pet.type === "gato");

console.log(conGato);

/////////////////////////

/* 5. Obtén un array con los coches de los españoles. */
console.log("Ejercicio 5");

//Primero filtro los epañoles
let espanoles = persons.filter((person) => person.country === "ES");

//Por cada español añadimos su coche a un array nuevo
let cochesEspanoles = espanoles.map((espanol) => buscarCoche(espanol.car));

//Para encotrar el coche, usamos find en el array de coches, buscando por matricula
function buscarCoche(matricula) {
  let coche = cars.find((car) => car.id === matricula);
  return coche;
}

console.log(cochesEspanoles);

//lo mismo en una linea
let cochesEspanoles1linea = persons
  .filter((person) => person.country === "ES")
  .map((espanol) => cars.find((car) => car.id === espanol.car));

console.log(cochesEspanoles1linea);
//////////////
/* 5-otra version */
//Primero filtramos las personas para tener un array de españoles (ya esta hecho)

//Hacemos un array con las matriculas de los españoles
let matriculasEspanolas = espanoles.map((espanol) => espanol.car);

//Filtramos los coches, dejando solo aquellos cuya matricula esté incluida en el array de matriculas españolas
let cochesEspanolesv2 = cars.filter((car) =>
  matriculasEspanolas.includes(car.id)
);

//lo mimso en una linea
let cochesEspanolesv21linea = cars.filter((car) =>
  persons
    .filter((person) => person.country === "ES")
    .map((espanol) => espanol.car)
    .includes(car.id)
);

console.log(cochesEspanolesv2);

////////////////////////

/* 6. Obtén un array con las personas que tengan un coche de la marca Ford. */
console.log("Ejercicio 6");

//Primero filtramos los coches para quedarnos solo con los Ford

let fords = cars.filter((car) => car.brand === "Ford");

//Funcion que busca una persona segun la matricula de su coche
function buscarPersona(matricula) {
  return persons.find((person) => person.car === matricula);
}

//Hacemos un array nuevo con los resultados de bucar los propietarios de fords segun su matricula
let personasFord = fords.map((ford) => buscarPersona(ford.id));

console.log(personasFord);

//lo mismo en una linea

let personasFord1linea = cars
  .filter((car) => car.brand === "Ford")
  .map((ford) => persons.find((person) => person.car === ford.id));

console.log(personasFord1linea);

////

//Primero filtramos los coches para quedarnos solo con los Ford (ya esta hecho)

//Hacemos un nuevo array con las matriculas de los ford
let matriculasFord = fords.map((ford) => ford.id);

//Filtramos a las personas dejando solo aquellas cuya matricula esté incluida en el array de matriculas de ford

let personasFordv2 = persons.filter((person) =>
  matriculasFord.includes(person.car)
);

console.log(personasFordv2);

////////////////////////

/* 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda la info de su coche. */
console.log("Ejercicio 7");

//Hacemos un nuevo array a partir del de personas (map)
//Por cada persona buscamos su coche (funcion creada en ejercicio 5) y devolvemos (añadimos al nuevo array) un nuevo objeto con:
//Todo lo de la persona (spread) sustituyendo el valor de la clave car por el objeto que encontró la función de buscar coche
let personasCoche = persons.map((person) => {
  let coche = buscarCoche(person.car);
  return { ...person, car: coche };
});

console.log(personasCoche);

let personasCoche1linea = persons.map((person) => {
  return { ...person, car: cars.find((car) => car.id === person.car) };
});

console.log(personasCoche1linea);

//Asi cambio los objetos originales
let personasCocheOriginal = persons.map((person) => {
  person.car = cars.find((car) => car.id === person.car);
  return person;
});

console.log(persons);
