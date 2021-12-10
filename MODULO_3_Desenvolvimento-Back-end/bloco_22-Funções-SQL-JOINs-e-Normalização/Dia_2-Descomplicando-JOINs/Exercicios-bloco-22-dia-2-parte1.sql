SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT act.actor_id, act.first_name, act.last_name, film.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS film
ON act.actor_id = film.actor_id; 

SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;
SELECT st.first_name, st.last_name, ad.address
FROM sakila.staff AS st
INNER JOIN sakila.address AS ad
ON st.address_id = ad.address_id;

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;
SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER by c.first_name DESC
LIMIT 100;

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;
SELECT c.first_name, c.last_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;
SELECT c.first_name, c.last_name, COUNT(a.address) AS 'address_quantity'
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;
SELECT s.first_name, s.last_name, AVG(p.amount) AS 'average_payment'
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;
SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN  sakila.film AS f
ON fa.film_id = f.film_id;