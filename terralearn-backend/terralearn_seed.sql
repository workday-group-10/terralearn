INSERT INTO category(country, image_url, difficulty)
VALUES(
    'France', 'france.jpg', 'Easy'
);
INSERT INTO cities(city, place_id, category_id)
VALUES(
    'Paris','519cde56ca3cbe02405952699d53a56d4840f00101f9016517010000000000c002099203055061726973', (SELECT id FROM category WHERE country='France')
)
