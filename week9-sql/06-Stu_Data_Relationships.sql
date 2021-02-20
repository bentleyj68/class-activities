-- 1. Create a Students table
CREATE TABLE students (
	student_id SERIAL PRIMARY KEY,
    first_name varchar(20),
	last_name varchar(20)
);

drop table students;

INSERT INTO students (first_name, last_name) VALUES
	('Bob' ,'Smith'), ('Jane', 'Davidson'), ('Jimmy', 'Bell'), ('Stephanie', 'Duke');



-- 2. Create a Courses table
CREATE TABLE courses (
	course_id SERIAL PRIMARY KEY,
    course_name varchar(20)
);

drop table courses;

INSERT INTO courses (course_name) VALUES
	('Accounting'), ('Computer Science'), ('Medicine'), ('Engineering');


-- 3. Create a Student Courses table
CREATE TABLE student_courses (
	student_id int not null,
	course_id int not null,
    term varchar(10),
	PRIMARY KEY (student_id, course_id),
	FOREIGN KEY (student_id) REFERENCES students(student_id),
	FOREIGN KEY (course_id) REFERENCES courses(course_id)	
);

INSERT INTO student_courses (student_id, course_id, term) VALUES
	(1,1,'Spring'), (1,2,'Fall'), (2,4,'Fall'), (3,3,'Spring');


drop table student_courses;
