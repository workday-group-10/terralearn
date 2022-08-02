const {UnauthorizedError, BadRequestError, NotFoundError} = require("../utils/errors")
const db = require("../db")

class Game{
    //adds game to game table
    static async addGame(game){
        //guess now has guess.userId
        const requiredFields = ["user_id", "final_score", "category_id", "guess_id"]
        requiredFields.forEach(field => {
            if(!game.hasOwnProperty(field)){
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })

       const query = `INSERT INTO games 
       (user_id, final_score, category_id, guess_id) VALUES ($1, $2, $3, $4) 
       RETURNING user_id, final_score, category_id, guess_id;`

        const result = await db.query(query, [game.user_id, game.final_score, game.category_id, game.guess_id])

       const gameAdded = result.rows[0]
        
       return gameAdded
    }
    //fetches all Games 
    static async fetchAllGames(){

        const query = `SELECT  username, country, final_score FROM games 
        JOIN category
        ON category.id = games.category_id
        JOIN users
        ON users.id = games.user_id
        ORDER BY final_score DESC
        
        LIMIT 10;`

        const result = await db.query(query)

        const scores = result.rows

        return scores
    }
    //fetches games from games table by country 
    static async fetchGamesByCountryId(countryId){

        const query = `SELECT username, country, final_score FROM games 
        JOIN category
        ON category.id = games.category_id
        JOIN users
        ON users.id = games.user_id
        WHERE category_id = $1
        ORDER BY final_score DESC;`

        const result = await db.query(query, [countryId])

        const scores = result.rows

        return scores
    }
    //fetches games from games table by user 
    static async fetchGamesByUserId(user_id) {
        const query = `SELECT * from games
        JOIN category
        ON category.id = games.category_id
        WHERE user_id= $1
        ORDER BY final_score DESC;`;
        const result = await db.query(query, [user_id]);
        const guesses = result.rows;
        return guesses;
    }
    //fetches the users most recent score and category played
    static async fetchRecentScore(user_id) {
        const query = `SELECT country, final_score from games
        JOIN category
        ON category.id = games.category_id
        WHERE user_id= $1
        ORDER BY created_at DESC
        LIMIT 1;`;
        const result = await db.query(query, [user_id]);
        const guesses = result.rows;
        return {"recent_country": guesses[0].country, "recent_score": guesses[0].final_score};
    }
    //fetches the users highest score
    static async fetchHighScore(user_id) {
        const query = `SELECT country, final_score from games
        JOIN category
        ON category.id = games.category_id
        WHERE user_id= $1
        ORDER BY final_score DESC
        LIMIT 1;`;
        const result = await db.query(query, [user_id]);
        const guesses = result.rows;
        return {"highest_country": guesses[0].country, "recent_score": guesses[0].final_score};
    }

}

module.exports = Game