const express = require("express");
const app = express();
const port = 8080;

// Escribe aquí el código solicitado

//middleware
app.use((req, res, next) => {
  console.log("URL: " + req.url);
  console.log("Método: " + req.method);

  next();
});

//endpoint
app.get("/error-forzado", (req, res, next) => {
  return next(new Error("Este es un error generado intencionadamente"));
});

app.get("/time", time);
app.get("/path", path);

//Middleware error
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500);
  res.send("Algo salió mal");
});

//Middleware 404
app.use((req, res, next) => {
  res.status(404);
  res.send("404: Not found");
});

//Controllers

function time(req, res, next) {
  try {
    const now = new Date();

    res.send(`Hora de la petición: ${now.getHours()}:${now.getMinutes()}`);
  } catch (e) {
    next(e);
  }
}

function path(req, res, next) {
  try {
    res.send("Ruta: " + process.mainModule.filename);
  } catch (e) {
    next(e);
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
