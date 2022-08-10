INSERT INTO category(country, image_url, difficulty,descriptions)
VALUES
    ('France', 'https://media.istockphoto.com/photos/white-horses-in-the-camargue-picture-id1160530164?k=20&m=1160530164&s=612x612&w=0&h=vxbbOptKCctXBsH8ev4i4bL2z_H4y5JU1EpZ72P9xfM=', 'Easy','From idyllic vineyards to stretches of lavender, France is filled with beautiful places for travelers to explore. The Camargue, a marshy delta by the Mediterranean, features red salt flats and free-roaming white horses'),
    ('USA', 'https://www.attractionsofamerica.com/images/all_travel/20191109114454_times-square-ny.jpg', 'Easy', 'Time Square is one of the most famous places in the US where street performers come to playshops open their doors wide, traffic rages on, the billboards are bright, and people from all over the world come together'),
    ('Germany', 'https://media.istockphoto.com/photos/munich-picture-id962642536?k=20&m=962642536&s=612x612&w=0&h=SS7uIBeZ07NvjqKrJ6QU5JVnvEyo96p8PmQVyf3js84=', 'Easy','Munich is Germany''s lifestyle capital. And on top of all this, it boasts one of the country''s most beautiful squares: Marienplatz, at the heart of the city and home to the Old and New Town Halls'),
    ('Japan', 'https://www.japan-guide.com/thumb/XYZeXYZe3401_1680a.jpg', 'Easy','Miyajima is a romantic place, best enjoyed by staying overnight at one of the island''s ryokan. While there are usually many day tourists, in the evening the area becomes much quieter and more peaceful.'),
    ('World', 'https://images4.alphacoders.com/695/695882.jpg', 'Easy','The world is at your disposal. Explore all 7 continents and find out if you know your home.');
INSERT INTO cities(city, place_id, category_id)
VALUES
    ('Paris','519cde56ca3cbe02405952699d53a56d4840f00101f9016517010000000000c002099203055061726973', (SELECT id FROM category WHERE country='France')),
    ('New York','511afd6c89127c52c059336cb0c7f3544440f00101f90121af020000000000c0020a9203084e657720596f726b', (SELECT id FROM category WHERE country='USA')),
    ('Berlin', '5141d026fcfbcd2a4059ef44a4d830404a40f00101f901d6f30000000000009203064265726c696e', (SELECT id FROM category WHERE country='Germany')),
    ('Shibuya', '5180c7a04848766140599e2996c87cd54140f00101f901f5d81a0000000000c00208920309e6b88be8b0b7e58cba', (SELECT id FROM category WHERE country='Japan'));
INSERT INTO category(country, image_url, difficulty,descriptions)
VALUES
    ('Indonesia', 'https://images.unsplash.com/photo-1555043722-4523972f07ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', 'Easy', 'Indonesia, country located off the coast of mainland Southeast Asia in the Indian and Pacific oceans. It is an archipelago that lies across the Equator and spans a distance equivalent to one-eighth of Earth''s circumference.'),
    ('India', 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80', 'Easy', 'India, country that occupies the greater part of South Asia. Its capital is New Delhi, built in the 20th century just south of the historic hub of Old Delhi to serve as India''s administrative centre.'),
    ('Philippines', 'https://images.unsplash.com/photo-1598258710957-db8614c2881e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'Easy','Philippines, island country of Southeast Asia in the western Pacific Ocean. It is an archipelago consisting of more than 7,000 islands and islets lying about 500 miles (800 km) off the coast of Vietnam.'),
    ('Ghana', 'https://images.unsplash.com/photo-1630386226447-af0a955c1009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2hhbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60', 'Easy','Ghana, country of western Africa, situated on the coast of the Gulf of Guinea. It was the first black African country south of the Sahara to achieve independence from colonial rule.'),
    ('Egypt', 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fpcm98ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60', 'Easy','Egypt, country located in the northeastern corner of Africa. Home of one of the principal civilizations of the ancient Middle East and, like Mesopotamia farther east, was the site of one of the world''s earliest urban and literate societies.'),
    ('Russia', 'https://images.unsplash.com/photo-1576413326475-ea6c788332fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9zY293fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', 'Easy','Russia, country that stretches over a vast expanse of eastern Europe and northern Asia. Once known as the USSR, Russia became an independent country after the dissolution of the Soviet Union in December 1991.'),
    ('South Africa', 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80', 'Easy','South Africa, the southernmost country on the African continent, renowned for its varied topography, great natural beauty, and cultural diversity, all of which have made the country a favoured destination for travelers since the legal ending of apartheid.'),
    ('Brazil', 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhemlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', 'Easy','Brazil, officially Federative Republic of Brazil, country of South America that occupies half the continent''s landmass. It is the fifth largest country in the world, exceeded in size only by Russia, Canada, China, and the United States.');
INSERT INTO cities(city, place_id, category_id)
VALUES
    ('Tokyo','51754d6407e217614059d7badc5abd144240f00101f90169d5050000000000c0020b920306e697a5e69cac', (SELECT id FROM category WHERE country='Japan')),
    ('Jakarta','518b8eb2d3a7ab5a4059217fc03c678316c0f00101f901361761000000000092031d446165726168204b6875737573204962756b6f7461204a616b61727461', (SELECT id FROM category WHERE country='Indonesia')),
    ('Delhi', '51de7e3fb25b47534059493c6a0fe2a43c40f00101f9013aa41d000000000092030544656c6869', (SELECT id FROM category WHERE country='India')),
    ('Manila', '51ab58de687c3a5e405964cd53c6a3312d40f00101f9011795010000000000c002099203064d616e696c61', (SELECT id FROM category WHERE country='Philippines')),
    ('Ghana', '517f779bdbca0df3bf592f58cbe62e541f40f00101f9010df1020000000000c0020b9203054768616e61', (SELECT id FROM category WHERE country='Ghana')),
    ('South Sinai', '512c70f16102e6404059c983d37710e73c40f00101f90139b42e0000000000920313d8acd986d988d8a820d8b3d98ad986d8a7d8a1', (SELECT id FROM category WHERE country='Egypt')),
    ('Moscow', '511e7433c031cd4240595ecbb6a2fcde4b40f00101f901fdfc26000000000092030cd09cd0bed181d0bad0b2d0b0', (SELECT id FROM category WHERE country='Russia')),
    ('Soweto', '51429afad02b13394059084f24564e433dc0f00101f9010d56010000000000c0020b92030c536f75746820416672696361', (SELECT id FROM category WHERE country='South Africa')),
    ('SÃ£o Paulo', '5116fdbec28b4448c059d5d766ab8c6d36c0f00101f901dc8c04000000000092030a53c3a36f205061756c6f', (SELECT id FROM category WHERE country='Brazil'));
INSERT INTO hints(hint, category_id)
VALUES
    ('https://st.depositphotos.com/1588500/1462/i/600/depositphotos_14625469-stock-photo-flag-of-japan.jpg', (SELECT id FROM cities WHERE city='Tokyo')),
    ('https://bigseventravel.com/wp-content/uploads/2022/02/Tokyo-tower.jpg', (SELECT id FROM cities WHERE city='Tokyo')),
    ('https://cdn.britannica.com/01/23901-004-21681A91/flag-Olympic-Games.jpg', (SELECT id FROM cities WHERE city='Tokyo')),
    ('https://www.flagsonline.it/uploads/2016-6-6/1200-0/indonesia.jpg', (SELECT id FROM cities WHERE city='Jakarta')),
    ('https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160222142959-indonesian-food-indomie-9444-1900px.jpg', (SELECT id FROM category WHERE city='Jakarta')),
    ('https://upload.wikimedia.org/wikipedia/commons/c/c3/Bhairava_Adityavarman.jpg', (SELECT id FROM cities WHERE city='Jakarta')),
    ('https://www.holidify.com/images/cmsuploads/compressed/2277457413_993362dca4_b_20190520143148.jpg', (SELECT id FROM cities WHERE city='Delhi')),
    ('https://media.gettyimages.com/vectors/delhi-map-with-long-shadow-on-blue-background-flat-design-vector-id1285679283?s=2048x2048', (SELECT id FROM cities WHERE city='Delhi')),
    ('https://c.ndtvimg.com/2019-09/q91h92f8_delhi-india-gate-pixabay-650_625x300_09_September_19.jpg', (SELECT id FROM cities WHERE city='Delhi')),
    ('https://viatravelers.com/wp-content/uploads/2019/10/Masskara.jpeg', (SELECT id FROM cities WHERE city='Manila')),
    ('https://a.cdn-hotels.com/gdcs/production23/d1646/7a8f7eb3-df74-4fd2-90ff-1f6481afb378.jpg?impolicy=fcrop&w=1600&h=1066&q=medium', (SELECT id FROM cities WHERE city='Manila')),
    ('https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMTk1OTE3OTYwMzI0NDQw/gettyimages-1257609884.jpg', (SELECT id FROM cities WHERE city='Manila')),
    ('https://st2.depositphotos.com/1483008/6167/i/950/depositphotos_61672653-stock-photo-kwame-nkrumah-memorial-park-monument.jpg', (SELECT id FROM cities WHERE city='Ghana')),
    ('https://static2.mansionglobal.com/production/media/article-images/89c34b78142fc4354fa368adf53cad4f/large_ghana-lead.jpg', (SELECT id FROM cities WHERE city='Ghana')),
    ('https://cdn.sanity.io/images/eqr4ac4k/production/5e13ae41b0d65c571404262d66832efee53d136d-1500x2250.jpg?rect=0,157,1500,1350&w=1200&h=1080&fit=crop', (SELECT id FROM cities WHERE city='Ghana')),
    ('https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png', (SELECT id FROM cities WHERE city='South Sinai')),
    ('https://image.shutterstock.com/image-vector/transparent-high-detailed-black-map-600w-550624726.jpg', (SELECT id FROM cities WHERE city='South Sinai')),
    ('https://www.egypttoday.com/siteimages/Larg/2020082405030838.jpg', (SELECT id FROM cities WHERE city='South Sinai')),
    ('https://www.expatica.com/app/uploads/sites/11/2021/10/red-square-1536x1024.jpg', (SELECT id FROM cities WHERE city='Moscow')),
    ('https://cdn.britannica.com/42/3842-050-68EEE2C4/Flag-Russia.jpg', (SELECT id FROM cities WHERE city='Moscow')),
    ('https://www.planetware.com/wpimages/2019/10/russia-best-places-to-visit-olkhon-island.jpg', (SELECT id FROM cities WHERE city='Moscow')),
    ('https://rightepharmacy.co.za/wp-content/uploads/2020/03/city_back.jpg', (SELECT id FROM cities WHERE city='Soweto')),
    ('https://addicted2success.com/wp-content/uploads/2017/09/Nelson-Mandela-History.jpg', (SELECT id FROM cities WHERE city='Soweto')),
    ('https://cdn.britannica.com/27/4227-050-00DBD10A/Flag-South-Africa.jpg', (SELECT id FROM cities WHERE city='Soweto')),
    ('http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTF6ULLB-4skDfS2ehsT7zWmHq6OPiicfMypRhmaZOGJfDfYA5D66QeUPTN9hl6XgJn', (SELECT id FROM cities WHERE city='SÃ£o Paulo')),
    ('https://ca-times.brightspotcdn.com/dims4/default/bf19efd/2147483647/strip/true/crop/1200x700+0+0/resize/840x490!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2Fbb%2F9a3400236fe7596f2d55ff919c73%2Fla-sp-brazil-world-cup-stadium-20140601-001', (SELECT id FROM cities WHERE city='SÃ£o Paulo')),
    ('https://www.celebritycruises.com/blog/content/uploads/2021/09/what-is-brazil-known-for-christ-the-redeemer-aerial-hero-1600x890.jpg', (SELECT id FROM cities WHERE city='SÃ£o Paulo'));
INSERT INTO hint(hint, category_id)
VALUES
    ('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/640px-Flag_of_France.svg.png', (SELECT id FROM cities WHERE city='Paris')),
    ('https://i5.walmartimages.com/asr/ca1a7178-6b83-4e2b-98c3-6431724bd092.98d8be637fdd243c592fa1bfa1d7767d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', (SELECT id FROM cities WHERE city='New York')),
    ('https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg', (SELECT id FROM cities WHERE city='Berlin')),
    ('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Japan_%281870%E2%80%931999%29.svg/220px-Flag_of_Japan_%281870%E2%80%931999%29.svg.png', (SELECT id FROM cities WHERE city='Shibuya'));
    