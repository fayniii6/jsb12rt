const args = require("minimist")(process.argv.slice(2));
const fs = require("fs");
const path = require("path");
const { format } = require("date-fns");

const dataPath = path.join(__dirname, "data.json");

function getData() {
  const exists = fs.existsSync(dataPath);

  if (exists) {
    return JSON.parse(fs.readFileSync(dataPath));
  } else {
    return [];
  }
}

function addEvent() {
  const { date, event } = args;

  const eventObj = { date, text: event };

  console.log(eventObj);

  const data = getData();

  data.push(eventObj);

  fs.writeFileSync(dataPath, JSON.stringify(data));
}

function printHelp() {
  console.log("Uso:");
  console.log("--date fecha (formato: AAAA/MM/DD)");
  console.log("--text 'texto del evento'");
  console.log(
    "Para añadir eventos, deben incluirse los dos argumentos anteriores"
  );
  console.log("--list-events -> ver lista de eventos");
}

function printEvents() {
  const data = getData();

  if (!data?.length) {
    console.log("No hay eventos");
    return;
  }

  data.map((event) => (event.date = new Date(event.date)));

  data.sort((eA, eB) => eA.date - eB.date);

  for (const event of data) {
    event.date = format(event.date, "yyyy/MM/dd");

    console.log(`🗓️ ${event.date}: ${event.text}`);
  }
}

try {
  if (args["list-events"]) {
    printEvents();
  } else if (args.date?.length && args.event?.length) {
    addEvent();
  } else {
    throw new Error("faltan argumentos");
  }
} catch (e) {
  console.log(e.message);
  printHelp();
}
