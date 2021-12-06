USE Scientists;
SELECT * FROM Scientists
WHERE name LIKE '%e%';

SELECT name FROM Projects
WHERE code LIKE 'A%'
ORDER BY name;

SELECT code, name FROM Projects
WHERE code LIKE '%3%'
ORDER BY name;

SELECT * FROM AssignedTo
WHERE Project IN ('AeH3' , 'Ast3', 'Che1');

SELECT * FROM Projects
WHERE Hours > 500;

SELECT * FROM Projects
WHERE Hours BETWEEN 250 AND 800
ORDER BY Hours;

SELECT name, code FROM Projects
WHERE name NOT LIKE 'A%';

SELECT name FROM Projects
WHERE code LIKE '%H%';