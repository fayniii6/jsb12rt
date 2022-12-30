"use strict";

function quiz() {
  // Escribe aquí tu código

  //Generamos numero
  let pass = getRandomNum();
  console.log(pass);

  //Hacemos un bucle para los intentos
  for (let i = 0; i < 5; i++) {
    //Pedimos un numero al usuario
    let userInput = +prompt("Introduce un número entre 0 y 100");
    console.log(userInput);

    //Si coinciden...
    if (userInput === pass) {
      //Sacamos alert
      alert("HAS GANADO");

      //PARAMOS LA FUNCIÓN
      return;
    }
    //si no...
    else {
      //sacamos alert
      alert(
        `El numero introducido es ${
          userInput > pass ? "mayor" : "menor"
        } que la contraseña`
      );
    }
  }

  //Si la funcion llega a este punto, ha perdido
  alert("HAS PERDIDO");
}

quiz();

//Funcion auxiliar para generar numeros aleatorios
function getRandomNum() {
  return Math.round(Math.random() * 100);
}
