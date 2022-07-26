INSERT INTO category(country, image_url, difficulty)
VALUES
    ('France', 'france.jpg', 'Easy'),
    ('USA', 'usa.jpg', 'Easy'),
    ('Germany', 'germany.jpg', 'Easy'),
    ('Japan', 'japan.jpg', 'Easy');
INSERT INTO cities(city, place_id, category_id)
VALUES
    ('Paris','519cde56ca3cbe02405952699d53a56d4840f00101f9016517010000000000c002099203055061726973', (SELECT id FROM category WHERE country='France')),
    ('New York','511afd6c89127c52c059336cb0c7f3544440f00101f90121af020000000000c0020a9203084e657720596f726b', (SELECT id FROM category WHERE country='USA')),
    ('Berlin', '5141d026fcfbcd2a4059ef44a4d830404a40f00101f901d6f30000000000009203064265726c696e', (SELECT id FROM category WHERE country='Germany')),
    ('Shibuya', '5180c7a04848766140599e2996c87cd54140f00101f901f5d81a0000000000c00208920309e6b88be8b0b7e58cba', (SELECT id FROM category WHERE country='Japan'));
