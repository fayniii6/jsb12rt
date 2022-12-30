"use strict";

function quiz(min, max, tries) {
  // Escribe aquí tu código

  let pass = getRandomNum(min, max);
  console.log(pass);

  for (let i = 0; i < tries; i++) {
    let userInput = +prompt(`Introduce un número entre ${min} y ${max}`);
    console.log(userInput);

    if (userInput === pass) {
      alert("HAS GANADO");
      return;
    } else {
      alert(
        `El numero introducido es ${
          userInput > pass ? "mayor" : "menor"
        } que la contraseña`
      );
    }
  }

  alert("HAS PERDIDO");
}

quiz(0, 100, 5);

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
