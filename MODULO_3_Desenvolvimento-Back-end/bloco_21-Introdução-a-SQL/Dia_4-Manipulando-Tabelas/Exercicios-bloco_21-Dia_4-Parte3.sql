SET SQL_SAFE_UPDATES = 0;

SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
DELETE FROM sakila.actor
WHERE first_name = 'KARL';
SELECT * FROM sakila.actor;

SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW'; 
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW'; 
SELECT * FROM sakila.actor;

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';
SELECT * FROM sakila.film_text;

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;