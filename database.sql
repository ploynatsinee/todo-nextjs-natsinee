CREATE EXTENSION pgcrypto;

CREATE TABLE users (
    first_name VARCHAR(300),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(1000),
    PRIMARY KEY(first_name)
);

CREATE TABLE todos (
    todo VARCHAR(255),
    isSuccessful BOOLEAN,
    first_name VARCHAR(300),
    CONSTRAINT FK_users FOREIGN KEY(first_name)
    REFERENCES users(first_name)
);