-- My code starts from here
-- Question 1
SELECT countries.name, languages.language, languages.percentage 
FROM countries
JOIN languages ON countries.id=languages.country_id
WHERE language = 'Slovene' 
ORDER BY percentage DESC;

-- Question 2
SELECT countries.name, COUNT(cities.name) AS cities
FROM countries
JOIN cities ON countries.id=cities.country_id
GROUP BY countries.name
ORDER BY cities DESC;

-- Question 3
SELECT cities.name, cities.population 
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE cities.population > 500000 and countries.name ='Mexico'
ORDER BY population DESC;

-- Question 4
SELECT countries.name, languages.language, languages.percentage
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;

-- Question 5
SELECT name, surface_area, population
FROM countries
WHERE surface_area < 501 and population > 100000;

-- Question 6
SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE government_form = 'Constitutional Monarchy'and capital > 200 and life_expectancy > 75;

-- Question 7
SELECT countries.name, cities.name, cities.district, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE cities.district='Buenos Aires' and cities.population > 500000;

-- Question 8
SELECT region, COUNT(name) AS countries
FROM countries
GROUP BY region
ORDER BY countries DESC;
