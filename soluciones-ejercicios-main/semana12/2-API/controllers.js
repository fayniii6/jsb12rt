const fs = require("fs").promises;
const Joi = require("joi");

const eventSchema = Joi.object({
  date: Joi.date(),
  text: Joi.string().min(4).max(100),
}).error(new Error("Datos no válidos"));

const getData = async () => {
  try {
    let data = await fs.readFile("./data.json");
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const listEvents = async (req, res) => {
  let events = await getData();

  events.sort((evA, evB) => new Date(evA.date) - new Date(evB.date));

  if (!events.length) {
    res.send({ message: "No hay eventos" });
  }

  res.send({ message: "Listando eventos...", events });
};

const addNewEvent = async (req, res) => {
  try {
    let events = await getData();

    await eventSchema.validateAsync(req.body);

    events.push(req.body);
    //console.log(events);
    await fs.writeFile("./data.json", JSON.stringify(events));
    res.send({ message: "Evento añadido correctamente" });
  } catch (e) {
    console.error(e.message);
    res.status(400).send({ message: `Hubo un problema: ${e.message}` });
  }
};

module.exports = {
  listEvents,
  addNewEvent,
};
