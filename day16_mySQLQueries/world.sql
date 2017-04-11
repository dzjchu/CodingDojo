-- My code starts from here
-- Question 1
SELECT countries.name, languages.language, languages.percentage FROM countries
JOIN languages ON countries.id=languages.country_id
WHERE language = 'Slovene' ORDER BY percentage DESC;

-- Question 2
