-- USERS TABLE CREATED.
CREATE TABLE users(
    id SERIAL NOT NULL,
    email VARCHAR(32),
    password VARCHAR(32)
);