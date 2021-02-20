-- 1
select * 
from city 
where city.city in ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes');

-- 2
select district
from address 
where city_id in (
	select city_id 
	from city 
	where city.city in ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes')
);

-- 3
select first_name, last_name
from customer cus
where address_id in(
	select address_id
	from address a
	where city_id in (
		select city_id 
		from city 
		where city.city in ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes')	
	)
)