CREATE TABLE wordassociation (
  author INT,
  word1 VARCHAR,
  word2 VARCHAR,
  source VARCHAR
);

select * from wordassociation;

drop table wordassociation;

select version();