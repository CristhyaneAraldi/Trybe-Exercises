USE sakila;
SELECT * FROM film
WHERE RATING = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
