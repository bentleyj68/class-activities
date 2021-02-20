-- 1. Create a Customer table
CREATE TABLE customer (
	id int PRIMARY KEY NOT NULL,
    first_name varchar(20),
	last_name varchar(20)
);

-- 2. Populate that table
-- 'Bob Smith', 'Jane Davidson', 'Jimmy Bell', and 'Stephanie Duke'
INSERT INTO customer (id, first_name, last_name) VALUES
	(1, 'Bob' ,'Smith'), (2, 'Jane', 'Davidson'), (3, 'Jimmy', 'Bell'), (4, 'Stephanie', 'Duke');



-- 3. View Table
select * from customer;

-- 4.. Create Customer Email table
CREATE TABLE customer_email (
	id int unique PRIMARY KEY NOT NULL,
    customer_id INT,
	email_address varchar(20),
	FOREIGN KEY (customer_id) REFERENCES customer(id)
);



-- 5. Populate the second table
-- 'bobsmith@email.com', 'jdavids@email.com', 'jimmyb@email.com', 'sd@email.com'




-- 6. View Table



-- 7. Creater Customer Phone Number table




-- 8. Populate Third Table
-- '435-344-2245', '332-776-4678', '221-634-7753', '445-663-5799'




-- 9. View Table