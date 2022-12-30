"use strict";

/* Edita el archivo index.js para crear un bucle que imprima en la consola una línea por cada hora del día en formato 24 horas, de 0:00 a 23:00:

Si la hora es anterior a las 8 de la mañana o posterior a las 22 debe imprimir solo la información de la hora, por ejemplo: "Son las 3:00"

Si la hora está entre las 8 y las 22 debe imprimir la información de la hora seguída de "CUCÚ!", por ejemplo "Son las 17:00, CUCÚ!" */

let horas = 24;

//FOR

for (let i = 0; i < horas; i++) {
  //console.log(i);

  if (i < 8 || i > 22) {
    console.log(`Son las ${i}:00`);
  } else {
    console.log(`Son las ${i}:00, CUCÚ!`);
  }
}

/* 
//For con condiciones sencillas
for (let i = 0; i < horas; i++) {
  //console.log(i);

  if (i < 8) {
    console.log(`Son las ${i}:00`);
  } else if (hora <= 22) {
    console.log(`Son las ${i}:00, CUCÚ!`);
  } else {
    console.log(`Son las ${i}:00`);
  }
}
 */

//WHILE

/* let hora = 0;

while (hora < horas) {
  if (hora >= 8 && hora <= 22) {
    console.log(`Son las ${hora}:00, CUCÚ!`);
  } else {
    console.log(`Son las ${hora}:00`);
  }

  hora++;
}
 */
