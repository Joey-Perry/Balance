DELETE FROM accounts
WHERE id = $1;

SELECT * FROM accounts
WHERE user_id = $2;