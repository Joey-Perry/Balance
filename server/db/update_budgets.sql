UPDATE categories
SET expected = $2, name = $3, date = $4
WHERE id = $1;

SELECT * FROM categories
WHERE user_id = $5;
