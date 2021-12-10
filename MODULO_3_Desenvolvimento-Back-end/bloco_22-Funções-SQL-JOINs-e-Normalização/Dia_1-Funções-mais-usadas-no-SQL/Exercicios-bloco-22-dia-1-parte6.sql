SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

SELECT rating, AVG(length) duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) as custo_de_substituicao
FROM sakila.film
GROUP BY rating
HAVING custo_de_substituicao  > 3950.50
ORDER BY custo_de_substituicao;