CREATE EXTENSION pgcrypto;

CREATE TABLE users (
    users_id SERIAL UNIQUE,
    first_name VARCHAR(300),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(1000),
    verified BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (users_id)
);

CREATE TABLE todos (
    todos_id SERIAL UNIQUE,
    userstodos_id INTEGER,
    todo VARCHAR(255),
    isSuccessful BOOLEAN,
    PRIMARY KEY (todos_id),
    FOREIGN KEY(userstodos_id) REFERENCES users(users_id)
);