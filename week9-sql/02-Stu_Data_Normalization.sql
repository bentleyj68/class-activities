CREATE TABLE owner (
	id int PRIMARY KEY NOT NULL,
    owner_name varchar(20)
);

CREATE TABLE pet (
	id int PRIMARY KEY NOT NUL,
    pet_name varchar(20),
	pet_type varchar (20).
	owner_id int 
);

INSERT INTO owner (owner_id, owner_name) VALUES (1, 'Sally');
INSERT INTO owner (owner_id, owner_name) VALUES (2, 'Charles');
INSERT INTO owner (owner_id, owner_name) VALUES (3, 'Angela');
INSERT INTO owner (owner_id, owner_name) VALUES (4, 'Kelly');
INSERT INTO owner (owner_id, owner_name) VALUES (5, 'Sa');
INSERT INTO owner (owner_id, owner_name) VALUES (6, 'Cassie');

INSERT INTO pet (pet_id, pet_name, pet_type, owner_id, service_id) 
	VALUES (1, 'Sally');
	
	
	
