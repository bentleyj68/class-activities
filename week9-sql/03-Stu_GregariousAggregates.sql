select count(film_id) as "Total Films", rating
from film
group by rating;

select rental_duration, round(avg(rental_duration), 2) as "Average rental rate"
from film
group by rental_duration;

-- Question 1
select round(avg(rental_rate),2) as "Average rental cost" 
from film; 

-- Question 2
select round(avg(rental_rate),2) as "Avg Cost", rating
from film
group by rating;

select round(min(rental_rate),2) as "Avg Cost", rating
from film
group by rating;

select round(max(rental_rate),2) as "Avg Cost", rating
from film
group by rating;

-- Question 3
select round(sum(replacement_cost),2) 
from film;

-- Question 4
select round(sum(replacement_cost),2), rating
from film
group by rating;

-- Question 5
select max(length) 
from film; 

select min(length) 
from film; 

select length 
from film 
order by length asc;  