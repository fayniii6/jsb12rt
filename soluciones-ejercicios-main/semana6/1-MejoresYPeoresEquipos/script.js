"use strict";

// puntuaciones primera ronda

const firstRound = [
  { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
  { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
  { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
  { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
  { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
  { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
  { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
  { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
];

//1º hacer un nuevo array con map (un elemento por cada uno del original)
let withTotals = firstRound.map((equipo) => {
  //Calculamos el total aplicando reduce a las puntuaciones
  let total = equipo.scores.reduce((acc, current) => acc + current);
  console.log(total);

  //devuelve (y mete al nuevo array) un nuevo objeto con todo lo que tenia el objeto original y a mayores el total
  return { ...equipo, total };
});

/* 
//Se podria hacer así... pero con metodos funcionales es mas facil

let peor = withTotals[0];

for (let equipo of withTotals) {
  console.log(equipo.total, peor.total);
  if (equipo.total < peor.total) {
    peor = equipo;
  }
}

console.log(peor);
 */

//Ordenamos el array
withTotals.sort((equipoA, equipoB) => equipoA.total - equipoB.total); //como recibe objetos, utilizamos la propiedad adecuada (total)

console.log(withTotals);

//Como esta ordenado de menor a mayor...

//El peor es el primer elemento
let peor = withTotals[0];

//El mejor es el ultimo elemento (siempre es uno menos que el length)
let mejor = withTotals[withTotals.length - 1];

//Sacamos las frases correspondientes
console.log(
  `El mejor equipo es ${mejor.team} con un total de ${mejor.total} puntos`
);
console.log(
  `El peor equipo es ${peor.team} con un total de ${peor.total} puntos`
);

console.log(firstRound);
