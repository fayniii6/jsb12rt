"use strict";

//Creamos una variable donde almacenar los segundos pasados
let secCounter = 0;

//Funcion que se ejecuta en el intervalo
function intervalFunc() {
  //aumenta el contador
  secCounter++;

  //console.log(secCounter);

  //Si el contador es multiplo de 5... (cada 5s)
  if (secCounter % 5 === 0) {
    //Imprime la frase (llamando a la funcion)
    print(secCounter);
  }
}

//Funcion para imprimir las frases
function print(sec) {
  //Los segundos son el resto de convertir a minutos
  let segundos = sec % 60;

  //Los minutos totales son los segundos totales divididos entre 60 redondeando hacia abajo (lo que sobra, son los segundos)
  let minutosT = Math.floor(sec / 60);

  //Los minutos son el resto de convertir a horas
  let minutos = minutosT % 60;

  //Las horas totales son los minutos totales divididos entre 60 redondeando hacia abajo (lo que sobra, son los minutos)
  let horasT = Math.floor(minutosT / 60);

  //Los minutos son el resto de convertir a dias
  let horas = horasT % 24;

  //Los dias son las horas totales divididas entre 24 redondeando hacia abajo (lo que sobra, son las horas)
  let dias = Math.floor(horasT / 24);

  //console.log(segundos, minutos, horas, dias);

  //Sacamos la frase completa
  //Dentro utilizamos una funcion para añadir o no la s del plural
  console.log(
    `Han pasado ${dias} día${plural(dias)}, ${horas} hora${plural(
      horas
    )}, ${minutos} minuto${plural(minutos)} y ${segundos} segundo${plural(
      segundos
    )} desde la ejecución del programa`
  );
}

//Funcion para plural
function plural(num) {
  //Si el numero es distinto de 1, devuelve una s, si no, un string vacio
  return num !== 1 ? "s" : "";
}

//Ejecutamos el intervalo cada segundo
let timerInteval = setInterval(intervalFunc, 1000);

//Funcion que para realmente el intervalo
function pararIntervalo() {
  //mostramos el aviso
  console.log("parando el reloj");

  //paramos el intervalo
  clearInterval(timerInteval);
}

//Funcion para llamar a la de parar en el tiempo indicado
function parar(num, letra) {
  //Igualamos los milisegundos al numero
  let ms = num;

  //Usamos un switch con encadenamiento para convertir a milisegundos
  switch (letra) {
    case "D": //Si es D
      ms *= 24; //pasamos a H
    case "H": //Si es H
      ms *= 60; //pasamos a M
    case "M": //si son M
      ms *= 60; //pasamos a S
    case "S": //si son S
      ms *= 1000; // ms = ms * 1000 //pasamos a MS
  }
  console.log(ms);

  //usamos un timeout para ejecutar la funcion de parar el intervalo en el tiempo indicado en milisegundos
  setTimeout(pararIntervalo, ms);
}

//llamamos a la funcio que para el temporizados
parar(3, "S");
