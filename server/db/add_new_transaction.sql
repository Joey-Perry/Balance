INSERT INTO transactions
(expected, actual, name, date, user_id)
VALUES
($2, $3, $4, $5, $1);

SELECT * FROM transactions
WHERE user_id = $1;