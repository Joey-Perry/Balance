INSERT INTO accounts
(user_id, type, name, notes, amount)
VALUES
($1, $2, $3, $4, $5);

SELECT * FROM accounts
WHERE user_id = $1;
