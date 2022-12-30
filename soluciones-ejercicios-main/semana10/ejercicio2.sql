-- Añadir columna
ALTER TABLE students ADD COLUMN age int;

-- Rellenar la columna

UPDATE students SET age = 58 WHERE id = 1;
UPDATE students SET age = 15 WHERE id = 2;
UPDATE students SET age = 85 WHERE id = 3;
UPDATE students SET age = 21 WHERE id = 4;
UPDATE students SET age = 7 WHERE id = 5;
