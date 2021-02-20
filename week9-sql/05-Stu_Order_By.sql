-- Question 1
select count(first_name) as "name count", first_name 
from actor
group by first_name
order by "name count" desc;

-- Question 2 
select round(avg(rental_duration),2), rating
from film 
group by rating
order by rating asc;

-- question 3
select avg(replacement_cost) as "Avg Replacement Cost", length 
from film
group by length
order by "Avg Replacement Cost" desc
limit 10

-- Bonus
select count(country) as "country count", country
from city, country 
where city.country_id = country.country_id
group by country
order by "country count" desc