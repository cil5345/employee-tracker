DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;


-- table for departments
CREATE TABLE department(
id INT(10) AUTO_INCREMENT NOT NULL, 
name VARCHAR(30),
PRIMARY KEY(id)
);

-- table for role
CREATE TABLE role(
id INT(10) AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL(10, 2),
department_id INT(30),
PRIMARY KEY(id)
);

-- table for employee
CREATE TABLE employee(
id INT(10) AUTO_INCREMENT NOT NULL,
firstName VARCHAR(30),
lastName VARCHAR(30),
role_id INT(30),
manager_id INT(30),
PRIMARY KEY(id)
);