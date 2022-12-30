const prompt = require("prompt-sync")();
const { name } = require("minimist")(process.argv.slice(2));

// SALUDAR /////////////////
//Si hay nombre, debe saludar por el nombre. SI no, solo decir "Hola"

//console.log(name);

//Usando if

/* if (name) {
  console.log(`Hola ${name}`);
} else {
  console.log("Hola");
} */

//Usando ternario
// console.log(`Hola ${name ? name : ""}`);

//Usando nullish coalescing https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

console.log(`Hola ${name ?? ""}`);

// PREGUNTAR ///////////

function ask() {
  try {
    //Se pide la respuesta
    let res = prompt("¿Qué tal estás? ");

    //Opcional: si no hay respuesta, se despide y para la fución
    if (!res) {
      console.log("Adios");
      return;
    }

    //Cambiamos la respuesta a minusculas para que no distinga
    res = res.toLowerCase();

    //Distintas opciones según la respuesta
    switch (res) {
      case "bien":
        console.log("¡Me alegro :)!");
        break;

      case "mal":
        console.log("¡Ánimo :(!");
        break;

      //Si no está contemplada, vuelve a preguntar
      default:
        console.log("Lo siento, no te he entendido");
        ask();
        break;
    }

    //console.log(res);
  } catch (e) {
    console.log("Hubo un error...", e.message);
  }
}

//Primera llamada a la función
ask();
