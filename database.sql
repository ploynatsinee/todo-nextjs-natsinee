CREATE EXTENSION pgcrypto;

CREATE TABLE users (
    first_name VARCHAR(300),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(1000),
    PRIMARY KEY (first_name)
);

CREATE TABLE todos (
    name_user VARCHAR(300),
    todo VARCHAR(255),
    isSuccessful BOOLEAN,
    PRIMARY KEY (name_user),
    CONSTRAINT fk_name_user FOREIGN KEY(name_user) REFERENCES users(first_name)
);