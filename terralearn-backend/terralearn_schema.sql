CREATE TABLE users(
    id          SERIAL PRIMARY KEY,
    password    TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK(POSITION('@' IN email) > 1),
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    username    TEXT NOT NULL
);
CREATE TABLE category(
    id         SERIAL PRIMARY KEY,
    country    TEXT NOT NULL,
    image_url  TEXT NOT NULL,
    difficulty TEXT NOT NULL
);
CREATE TABLE cities(
    id          SERIAL PRIMARY KEY,
    city        TEXT NOT NULL,
    category_id INTEGER NOT NULL,
    FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE favorities(
    id          SERIAL PRIMARY KEY,
    user_id      INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE games(
    id          SERIAL PRIMARY KEY,
    user_id     INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    guess_id    INTEGER NOT NULL,
    final_score INTEGER NOT NULL,
    created_at  DATE NOT NULL DEFAULT CURRENT_DATE,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE profiles(
    id           SERIAL PRIMARY KEY,
    user_id      INTEGER NOT NULL,
    game_id      INTEGER NOT NULL,
    recent_score INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(game_id) REFERENCES games(id)
);

CREATE TABLE guess(
    id       SERIAL PRIMARY KEY,
    location TEXT NOT NULL,
    link     TEXT NOT NULL,
    user_id  INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

