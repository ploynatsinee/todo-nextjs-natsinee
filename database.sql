CREATE DATABASE test

-- Id  INT PRIMARY KEY,
--last_name VARCHAR(50),

CREATE TABLE users (
    first_name VARCHAR(300),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(1000)
);

CREATE TABLE todos (
    todo VARCHAR(255)
);