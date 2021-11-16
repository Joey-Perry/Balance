UPDATE accounts
SET type = $2, name = $3, notes = $4, amount = $5
WHERE id = $1;

SELECT * FROM accounts
WHERE user_id = $6;