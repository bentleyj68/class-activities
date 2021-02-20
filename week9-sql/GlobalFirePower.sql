CREATE TABLE firepower (
	country VARCHAR,
	ISO3 VARCHAR,
	rank INT,
	TotalPopulation INT,
	ManpowerAvailable INT,
	TotalMilitaryPersonnel INT,
	ActivePersonnel INT,
	ReservePersonnel INT,
	TotalAircraftStrength INT,
	FighterAircraft INT,
	AttackAircraft INT,
	TotalHelicopterStrength INT,
	AttackHelicopters INT
);

select * from firepower;

select * from firepower where reservepersonnel = 0;

delete from firepower where reservepersonnel = 0;

select country, fighteraircraft from firepower where fighteraircraft = 1 
-- Sri Lanka

select country, fighteraircraft from firepower where fighteraircraft = 0

update firepower 
set fighteraircraft = 1
where fighteraircraft = 0

select avg(TotalMilitaryPersonnel) as AvgTotalMilitaryPersonnel, 
	avg(TotalAircraftStrength) as avgTotalAircraftStrength 
	
	from firepower;
