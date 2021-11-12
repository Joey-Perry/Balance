UPDATE transactions
SET vendor = $2, amount = $3, category = $4, description = $5, date = $6
WHERE id = $1;

SELECT * FROM transactions
WHERE user_id = $7;