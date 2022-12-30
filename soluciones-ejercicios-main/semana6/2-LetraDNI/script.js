"use strict";

//Array de letras ordenado como corresponde
const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

function validateDNI(dni) {
  // escribe aquí tu código

  //Como trabajaremos con errores, metemos todo en un try
  try {
    //Si la longitud es distinta de 10 o el tipo no es string...
    if (dni.length !== 10 || typeof dni !== "string") {
      //Lanzamos error
      throw new Error("Debe ser un string con 10 caracteres");
    }

    //Dividimos el string por el guion
    let partes = dni.split("-");

    //Si las partes no son 2...
    if (partes.length !== 2) {
      //Lanzamos error
      throw new Error("Debe incluir un guion entre los numeros y la letra");
    }

    //Destructuring de las partes para trabajar más comodamente
    let [numeros, letra] = partes;

    //Si los numeros no tienen 8 caracteres o no son numeros...
    if (numeros.length !== 8 || isNaN(numeros)) {
      //Lanzamos error
      throw new Error("la primera parte de ser un numero de 8 digitos");
    }

    //Si la letra no es un solo caracter o es un numero...
    if (letra.length !== 1 || !isNaN(letra)) {
      //lanzamos error
      throw new Error("la segunda parte debe ser una unica letra");
    }

    //Averiguamos el resto del numero entre 23, para obtener el indice de la letra
    let resto = numeros % 23;
    console.log(resto);

    //Si la letra de ese indice en el array no coincide con la introducida (en mayusculas)...
    if (letras[resto] !== letra.toUpperCase()) {
      //lanzamos error
      throw new Error("La letra no se corresponde");
    }

    //Si hemos llegado hasta aqui sin errores... ¡es valido!
    console.log("es valido");
  } catch (e) {
    //Si hay algún error, lo sacamos por la consola
    console.error(e.message);
  }
}

// Nota: probaremos con varios números de DNI tanto válidos como no válidos
validateDNI("00000000-T");
validateDNI("25697531-e");
validateDNI("25697531-L");
validateDNI("25697531-5");
validateDNI("256975a1-E");
validateDNI("2569751-EE");
validateDNI("256975414E");
validateDNI("25697541E");
