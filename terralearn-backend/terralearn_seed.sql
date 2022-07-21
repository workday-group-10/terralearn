INSERT INTO category(country, image_url, difficulty)
VALUES(
    'France', 'france.jpg', 'Easy'
);
INSERT INTO cities(city, category_id)
VALUES(
    'Paris', (SELECT id FROM category WHERE country='France')
)
