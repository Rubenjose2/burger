-- DROP DATABASE IF EXIS
DROP DATABASE IF EXISTS burger_db;
-- Create the Database
CREATE DATABASE burger_db;
-- Use the Burger Database
USE burger_db;
-- Create the Table to be use
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255),
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY(id)
);