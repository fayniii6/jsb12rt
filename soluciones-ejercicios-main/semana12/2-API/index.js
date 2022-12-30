const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const { listEvents, addNewEvent } = require("./controllers");

app.use(cors());
app.use(express.json());

// Escribe aquí el código solicitado

app.get("/list", listEvents);
app.post("/new", addNewEvent);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
