CREATE DATABASE IF NOT exists bootcamp;
USE bootcamp;

#DROP TABLE IF exists students;
#DROP TABLE IF exists addresses;

### EJERCICIO 1 ####

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


### EJERCICI 2 ###

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
 
 
 ### EJERCICIO 3 ###
 
 INSERT INTO students (name, last_name, email, tlf, dni) VALUES
 ("Irvin","Lethem","ilethem0@google.com.au",993870144,"279948941-9"),
 ("Kylie","Mungan","kmungan1@howstuffworks.com",497494899,"748551874-7"),
 ("Yul","Dibbert","ydibbert2@businesswire.com",776631050,"215649413-4"),
 ("Tamra","Mc Gorley","tmcgorley3@studiopress.com",921948685,"617064473-7"),
 ("Elmira","Imbrey","eimbrey4@cpanel.net",304168000,"178988896-4");
 
 #SELECT * FROM students;
 
 INSERT INTO addresses (student_id, country, postal_code, address, city) VALUES
 (1, "Indonesia",83297,"98339 Loftsgordon Road","Babakanbandung"),
 (2, "Philippines",44455,"74641 Dwight Avenue","Bilar"),
 (3, "Indonesia",62965,"9510 Milwaukee Street","Sumberejo"),
 (4, "Norway",54756,"8902 Doe Crossing Alley","Steinkjer"),
 (5, "United States",51471,"8616 Stephen Hill","Charleston");
 
 SELECT * FROM addresses;
 
 
 ### EJERCICIO 4 ###
 
 SELECT name, last_name, tlf FROM students ORDER BY last_name;
 
 SELECT country, count(*) FROM addresses GROUP BY country;
 
 
 ####################
 
  INSERT INTO addresses (student_id, country, postal_code, address, city) VALUES
 (1, "Philippines",83297,"98339 Loftsgordon Road","Babakanbandung"),
 (2, "Philippines",44455,"74641 Dwight Avenue","Bilar");
 
  SELECT country, count(distinct student_id) FROM addresses GROUP BY country;
 