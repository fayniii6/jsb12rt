
SELECT name, age  FROM students WHERE age = (SELECT max(age) FROM students);