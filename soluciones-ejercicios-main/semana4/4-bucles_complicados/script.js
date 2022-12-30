"use strict";

/* 
Partiendo del código del ejercicio anterior haz que la cantidad de veces que aparezca "CUCÚ!" entre las 8 y las 22 sea correspondiente a la hora, por ejemplo a las 10 de la mañana debería poner:

"Son las 10:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!"

Con una dificultad extra: el número de cucús debe ser siempre en correspondiente a las horas en formato 12h y no 24h, por lo que a las 5 de la tarde (17:00) debe poner solo 5 "CUCÚ!" y no 17:

"Son las 17:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!"
*/
let horas = 24;

for (let i = 0; i < horas; i++) {
  //console.log(i);

  if (i < 8 || i > 22) {
    console.log(`Son las ${i}:00`);
  } else {
    let hora12 = i;
    if (i > 12) {
      hora12 -= 12; //hora12 = i - 12;
    }
    //console.log(hora12);

    let cucus = "";

    for (let j = 0; j < hora12; j++) {
      //console.log(j);
      cucus += " CUCÚ!"; //cucus = cucus + " CUCÚ!"
    }

    //console.log(cucus);

    console.log(`Son las ${i}:00.` + cucus);
  }
}

// CON REPEAT

/* for (let i = 0; i < horas; i++) {
  //console.log(i);

  if (i < 8 || i > 22) {
    console.log(`Son las ${i}:00`);
  } else {
    let hora12 = i;

    if (hora12 > 12) {
      hora12 %= 12;
    }

    console.log(`Son las ${i}:00.` + " CUCÚ!".repeat(hora12));
  }
} */

/* let sonido = " CUCÚ!";

for (let i = 0; i <= 23; i++) {
  if (i >= 8 && i <= 22) {
    if (i > 12) {
      console.log(`Son las ${i}:00, ${sonido.repeat(i - 12)}`);
    } else {
      console.log(`Son las ${i}:00, ${sonido.repeat(i)}`);
    }
  } else {
    console.log(`Son las ${i}:00`);
  }
}
 */
