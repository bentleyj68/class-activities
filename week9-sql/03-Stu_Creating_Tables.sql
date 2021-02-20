-- Create a new table
CREATE TABLE cities (
  city VARCHAR(30) NOT NULL,
  state VARCHAR(10) NOT NULL,
  population INT
);

select * from cities;

-- Insert data into the table
INSERT INTO cities (city, state, population)
VALUES ('Sydney', 'New South Wales', 5230330),
  ('Perth', 'Western Australia', 2059484),
  ('Melbourne', 'Victoria', 4936349),
  ('Brisbane', 'Queensland', 2462637),
  ('Gold Coast', 'Queensland', 679127),
  ('Adelaide', 'South Australia', 1345777);

Select city from cities;

Select * from cities where state = 'Queensland'

Select * from cities where population <= 1000000