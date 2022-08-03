INSERT INTO category(country, image_url, difficulty,descriptions)
VALUES
    ('France', 'https://media.istockphoto.com/photos/white-horses-in-the-camargue-picture-id1160530164?k=20&m=1160530164&s=612x612&w=0&h=vxbbOptKCctXBsH8ev4i4bL2z_H4y5JU1EpZ72P9xfM=', 'Easy','From idyllic vineyards to stretches of lavender, France is filled with beautiful places for travelers to explore. The Camargue, a marshy delta by the Mediterranean, features red salt flats and free-roaming white horses'),
    ('USA', 'https://www.attractionsofamerica.com/images/all_travel/20191109114454_times-square-ny.jpg', 'Easy', 'Time Square is one of the most famous places in the US where street performers come to playshops open their doors wide, traffic rages on, the billboards are bright, and people from all over the world come together'),
    ('Germany', 'https://media.istockphoto.com/photos/munich-picture-id962642536?k=20&m=962642536&s=612x612&w=0&h=SS7uIBeZ07NvjqKrJ6QU5JVnvEyo96p8PmQVyf3js84=', 'Easy','Munich is Germany''s lifestyle capital. And on top of all this, it boasts one of the country''s most beautiful squares: Marienplatz, at the heart of the city and home to the Old and New Town Halls'),
    ('Japan', 'https://www.japan-guide.com/thumb/XYZeXYZe3401_1680a.jpg', 'Easy','Miyajima is a romantic place, best enjoyed by staying overnight at one of the island''s ryokan. While there are usually many day tourists, in the evening the area becomes much quieter and more peaceful.');
INSERT INTO cities(city, place_id, category_id)
VALUES
    ('Paris','519cde56ca3cbe02405952699d53a56d4840f00101f9016517010000000000c002099203055061726973', (SELECT id FROM category WHERE country='France')),
    ('New York','511afd6c89127c52c059336cb0c7f3544440f00101f90121af020000000000c0020a9203084e657720596f726b', (SELECT id FROM category WHERE country='USA')),
    ('Berlin', '5141d026fcfbcd2a4059ef44a4d830404a40f00101f901d6f30000000000009203064265726c696e', (SELECT id FROM category WHERE country='Germany')),
    ('Shibuya', '5180c7a04848766140599e2996c87cd54140f00101f901f5d81a0000000000c00208920309e6b88be8b0b7e58cba', (SELECT id FROM category WHERE country='Japan'));
