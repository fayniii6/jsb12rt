"use strict";

const pizzas = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

/* 01
02
03
04
05
12
13
14
15
23
24
25
34 */

function combine(pizzas) {
  const combinations = [];

  // Escribe aquí tu código
  for (let i = 0; i < pizzas.length; i++) {
    //console.log(1, pizzas[i]);

    for (let j = i + 1; j < pizzas.length; j++) {
      //console.log(pizzas[i], pizzas[j]);
      combinations.push(`${pizzas[i]} y ${pizzas[j]}`);
    }
  }

  return combinations;
}

console.log(combine(pizzas));
