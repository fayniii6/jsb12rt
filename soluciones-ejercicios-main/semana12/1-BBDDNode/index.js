"use strict";

const getDB = require("./db");

//Escribe a partir de aquí el código solicitado

let connection;

async function main() {
  try {
    connection = await getDB();
    console.log("Conexión establecida");

    //Crear la BBDD
    await connection.query("CREATE DATABASE if not exists web");

    await connection.query("USE web;");

    //Borrar tablas
    console.log("Borrando tablas...");

    await connection.query("DROP TABLE IF EXISTS likes");
    await connection.query(`DROP TABLE IF EXISTS photos`);
    await connection.query(`DROP TABLE IF EXISTS users`);

    //Crear tablas
    console.log("creando tablas...");
    await connection.query(`CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    name VARCHAR(255),
    registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    active BOOLEAN DEFAULT FALSE
  )`);

    await connection.query(`
  CREATE TABLE photos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    photo_file_name VARCHAR(255),
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
  )`);

    await connection.query(`CREATE TABLE likes(
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        photo_id INT NOT NULL,
        creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id),
        FOREIGN KEY (photo_id) REFERENCES photos (id)
  )`);

    console.log("Tablas creadas correctamente");
  } catch (e) {
    console.error(e);
  } finally {
    if (connection) connection.release();
    process.exit();
  }
}

main();
