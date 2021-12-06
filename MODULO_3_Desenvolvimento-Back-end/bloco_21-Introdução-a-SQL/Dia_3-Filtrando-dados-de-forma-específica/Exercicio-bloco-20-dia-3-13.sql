USE sakila;
SELECT COUNT(*) from payment
WHERE DATE(payment_date) = '2005-05-25';