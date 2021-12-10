USE Pixar;
SELECT * FROM BoxOffice;
SELECT * FROM Movies;
SELECT * FROM Theater;

SELECT m.title, b.domestic_sales, b.international_sales
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id =  b.movie_id;

SELECT m.title, (b.domestic_sales + b.international_sales) AS 'Total_Sales'
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id =  b.movie_id
WHERE b.international_sales > b.domestic_sales;

SELECT m.title, b.rating
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id =  b.movie_id
ORDER BY b.rating DESC;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater AS t
LEFT JOIN Movies AS m
ON m.theater_id = t.id
ORDER BY t.name;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater AS t
RIGHT JOIN Movies AS m
ON m.theater_id = t.id
ORDER BY t.name;
