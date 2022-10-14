CREATE EXTENSION pgcrypto;

CREATE TABLE users (
    id SERIAL UNIQUE, 
    first_name VARCHAR(300),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(1000),
    PRIMARY KEY (id)
);

CREATE TABLE todos (
    id SERIAL UNIQUE,
    createdBy integer,
    todo VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY(createdBy) REFERENCES users(id)
);

CREATE TABLE userstodo (
    user_id integer,
    post_id integer,
    isSuccessful BOOLEAN,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(post_id) REFERENCES todos(id)
);