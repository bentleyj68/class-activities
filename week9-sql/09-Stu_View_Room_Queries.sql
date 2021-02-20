create view title_count as
select  
	(select title from film as f where f.film_id = i.film_id) as "title" ,
	count(i.film_id) as "number_of_copies"
from inventory as i
group by "title"
order by "number_of_copies" desc;

select * from title_count
where number_of_copies = 7