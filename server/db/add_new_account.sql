INSERT INTO accounts
(user_id, type, name, notes, amount)
VALUES
($1, $2, $3, $4, $5)
returning *;
