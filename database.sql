CREATE DATABASE test

CREATE TABLE users (
    Id  INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE todos (
    todo VARCHAR(255)
);