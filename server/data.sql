CREATE DATABASE todoapp;

CREATE TABLE todos (
  id VARCHAR(255) PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);

CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);

INSERT INTO todos(
    id,
    user_email,
    title,
    progress,
    date
    ) VALUES (
        '0','dave@test.com','Test Todo',10, 'Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)'
    );