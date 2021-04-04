CREATE TABLE premise (
    id integer NOT NULL,
    premise_name varchar(25) NOT NULL,
    county_id integer NOT NULL,
    CONSTRAINT pk_id PRIMARY KEY (
        id
     )
);

CREATE TABLE county (
    id integer NOT NULL,
    county_name varchar(10) NOT NULL,
    license_count integer,
    county_id integer NOT null,
    CONSTRAINT pk_id PRIMARY KEY (
        id
     )
);