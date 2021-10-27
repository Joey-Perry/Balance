CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(50),
    email VARCHAR(240),
    password VARCHAR
)

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    vendor VARCHAR(50),
    amount INT,
    category VARCHAR(50),
    description VARCHAR(240),
    date DATE,
    user_id INT references users(id)
)

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50),
    name VARCHAR(50),
    notes VARCHAR(240),
    amount INT,
    user_id INT references users(id)
)

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    expected INT,
    actual INT,
    name VARCHAR(50),
    date DATE,
    user_id INT references users(id)
)

-- Sample queries:

-- INSERT INTO users (first_name, last_name, username, email, password)
-- VALUES
-- ('Joey', 'Junior', 'jj', 'jj@.com', 'coolbeans'),
-- ('Hannah', 'Junior', 'hh', 'hh@.com', 'nobeans')

-- INSERT INTO transactions (vendor, amount, category, description, date, user_id)
-- VALUES
-- 	('walmart', 120, 'misc', 'water bottles', '09-10-2021', 1);

-- SELECT * FROM transactions;

-- INSERT INTO accounts
-- (type, name, notes, amount, user_id)
-- VALUES
-- ('debt', 'Regions', 'car loan', '17000', 1),
-- ('savings', 'Ally', 'emergency fund', '12000', 1),
-- ('checking', 'Wells Fargo', 'checking', '3000', 1),
-- ('savings', 'Amplify', 'big ticket', '500', 2)
-- SELECT * FROM accounts;