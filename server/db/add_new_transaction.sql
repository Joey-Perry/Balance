INSERT INTO transactions
(vendor, amount, category, description, date, user_id)
VALUES
($2, $3, $4, $5, $6, $1);

SELECT * FROM transactions
WHERE user_id = $1;