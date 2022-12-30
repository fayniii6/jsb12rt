CREATE DATABASE IF NOT exists bootcamp;
USE bootcamp;


CREATE TABLE students (
id int auto_increment PRIMARY KEY,
name VARCHAR(100),
last_name VARCHAR(100),
email VARCHAR(100),
tlf VARCHAR(20),
dni VARCHAR(15),
country VARCHAR(50),
postal_code INT,
address VARCHAR(150),
city VARCHAR(50)
);

