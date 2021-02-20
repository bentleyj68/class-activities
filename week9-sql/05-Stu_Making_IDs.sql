-- Create a new table
CREATE TABLE programming_languages (
  id serial primary key,
  language VARCHAR(30) NOT NULL,
  rating INT
);

select * from programming_languages;

INSERT INTO programming_languages (language, rating)
VALUES ('HTML', 95),
	('JS', 99),
	('JQuery', 98),
	('MySQL', 70),
	('MySQL', 70);
	
select * from programming_languages where language = 'MySQL';

alter table programming_languages
add column mastered boolean default true

Delete from programming_languages where id = 4;

INSERT INTO programming_languages (language, rating)
VALUES ('Python', 98),
	('C++', 73),
	('R', 95);
	
update programming_languages
set language = 'JavaScript'
where id = 2

update programming_languages
set rating = 90
where id = 1