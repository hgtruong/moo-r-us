CREATE DATABASE cows;

USE cows;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

CREATE TABLE cows (
  `id` int NOT NULL  AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY(ID)
);