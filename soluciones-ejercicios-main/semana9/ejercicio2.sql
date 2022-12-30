CREATE DATABASE IF NOT exists bootcamp;
USE bootcamp;

#DROP TABLE IF exists students;
#DROP TABLE IF exists addresses;

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


CREATE TABLE addresses(
id INT auto_increment PRIMARY KEY,
country VARCHAR(50),
postal_code INT,
address VARCHAR(150),
city VARCHAR(50)
);

ALTER TABLE students 
DROP COLUMN country,
DROP COLUMN postal_code,
DROP COLUMN address,
DROP COLUMN city;

ALTER TABLE addresses ADD student_id int;

ALTER TABLE addresses ADD foreign key (student_id) REFERENCES students (id);
 