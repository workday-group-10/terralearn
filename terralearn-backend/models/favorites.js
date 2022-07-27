const {
  UnauthorizedError,
  BadRequestError,
  NotFoundError,
} = require("../utils/errors");
const db = require("../db");

class Favorites {
  static async makeFavoriteUser(favorite) {
    return {
      user_id: favorite.user_id,
      category_id: favorite.category_id,
    };
  }
  //fect cities in table db
  static async fetchFavoriteCategory(user_id) {
    const query = `SELECT category_id,country
FROM favorities
JOIN users
  ON users.id = favorities.user_id
JOIN category
 ON category.id = favorities.category_id
WHERE users.id= $1;`;
    const result = await db.query(query, [user_id]);
    const favorites = result.rows;
    return favorites;
  }
  //fetch counties in table db
  static async fetchCountries() {
    const query = `SELECT * FROM category;`;

    const result = await db.query(query);

    const countries = result.rows;

    return countries;
  }

  //fetch all cities of a given country id
  static async fetchCitiesByCountryId(countryId) {
    const query = `SELECT * FROM cities WHERE category_id = $1;`;

    const result = await db.query(query, [countryId]);

    const cities = result.rows;

    return cities;
  }
  //add a place a person guessed to guessed table in db
  static async addGuess(guess) {
    const requiredFields = ["user_id", "location", "link"];
    requiredFields.forEach((field) => {
      if (!guess.hasOwnProperty(field)) {
        throw new BadRequestError(`missing ${field} in request body.`);
      }
    });
    const result = await db.query(
      `
            INSERT INTO guess (
                user_id,
                location,
                link
            )
            VALUES ($1, $2, $3)
            RETURNING user_id, location, link;
       `,
      [guess.user_id, guess.location, guess.link]
    );

    const guessUser = result.rows;

    return Places.makeGuessUser(guessUser);
  }

  static async fetchGuesses() {
    const query = `SELECT * FROM guess;`;

    const result = await db.query(query);

    const guesses = result.rows;

    return guesses;
  }
}

module.exports = Favorites;
