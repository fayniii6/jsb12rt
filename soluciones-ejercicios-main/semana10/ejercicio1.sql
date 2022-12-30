USE bootcamp;

-- Primera parte
SELECT * FROM students s LEFT JOIN addresses a ON s.id = student_id;

-- Segunda parte
SELECT name, last_name, email FROM students s LEFT JOIN addresses a ON s.id = student_id WHERE country = "Indonesia";
 