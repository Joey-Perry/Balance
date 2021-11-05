DELETE FROM categories
WHERE id = $1;

SELECT * FROM categories
WHERE user_id = $2;