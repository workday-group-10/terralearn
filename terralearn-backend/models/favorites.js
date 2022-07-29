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

  static async delete({ favorite }) {
    const requiredFields = ["category_id"];
    requiredFields.forEach((field) => {
      if (!favorite.hasOwnProperty(field)) {
        throw new BadRequestError(`missing ${field} in request body.`);
      }
    });
    const result = await db.query(
      `
    DELETE FROM  favorities
    WHERE  user_id = ($1) and category_id = ($2)
    RETURNING  category_id, user_id
   `,
      [favorite.userId, favorite.category_id]
    );

    const deletedResults = result.rows;

    return deletedResults;
  }

  //fetch all cities of a given country id

  static async listFavoritesForUser(user) {
    if (!user) {
      throw new BadRequestError("No email provided");
    }

    const userId = await db.query(
      `SELECT id 
  FROM users
  WHERE email = $1;
  `,
      [user.email]
    );

    const id = userId.rows[0].id;

    const query = `SELECT * FROM favorities WHERE user_id = $1`;

    // SELECT * FROM favorities WHERE user_id = 1 and category_id = 1

    const result = await db.query(query, [id]);

    const favorites = result.rows;

    return favorites;
  }

  static async listCategoryId(user, category_id) {
    if (!user) {
      throw new BadRequestError("No email provided");
    }

    const userId = await db.query(
      `SELECT id 
  FROM users
  WHERE email = $1;
  `,
      [user.email]
    );


    const id = userId.rows[0].id;

    const query = `SELECT * FROM favorities WHERE user_id = $1 and category_id = $2`;

    const result = await db.query(query, [id, category_id]);
    
    const favorites = result.rows[0];
    
    

    return favorites;
  }

  static async addFavorite({ favorite }) {
    const requiredFields = ["category_id"];
    requiredFields.forEach((field) => {
      if (!favorite.hasOwnProperty(field)) {
        throw new BadRequestError(`missing ${field} in request body.`);
      }
    });
    const result = await db.query(
      `
    INSERT INTO favorities(user_id,category_id)
        VALUES ($1, $2)
        RETURNING user_id, category_id;
   `,
      [favorite.userId, favorite.category_id]
    );

    const favoriteResults = result.rows;

    return favoriteResults;
  }
}
module.exports = Favorites;
