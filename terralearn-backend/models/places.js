const {UnauthorizedError, BadRequestError, NotFoundError} = require("../utils/errors")
const db = require("../db")

class Places{
    static async makeGuessUser(guess){
        return {
            user_id: guess.user_id,
            location: guess.location,
            link: guess.link
        }
    }
    //fect cities in table db
    static async fetchCities(){

        const query = `SELECT * FROM cities;`

        const result = await db.query(query)

        const cities = result.rows

        return cities
    }
//fetch counties in table db
    static async fetchCountries(){

        const query = `SELECT * FROM category;`

        const result = await db.query(query)

        const countries = result.rows

        return countries
    }

    //fetch all cities of a given country id
    static async fetchCitiesByCountryId(countryId){

        const query = `SELECT * FROM cities WHERE category_id = $1;`

        const result = await db.query(query, [countryId])

        const cities = result.rows

        return cities
    }
    //add a place a person guessed to guessed table in db
    static async addGuess({guess}){
        //guess now has guess.userId
        const requiredFields = ["location", "link"]
        requiredFields.forEach(field => {
            if(!guess.hasOwnProperty(field)){
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })

       const query = `INSERT INTO guess (user_id, location, link) VALUES ($1, $2, $3) RETURNING user_id, location, link;`

        const result = await db.query(query, [guess.user_id, guess.location, guess.link])

       const guessUser = result.rows
        
       return Places.makeGuessUser(guessUser)
    }

    static async fetchGuessesForUser(user){
        if(!user){
            throw new BadRequestError("No email provided")
        }

        const userId = await db.query( `SELECT id 
        FROM users
        WHERE email = $1;
        `,
        [user.email]
        )

        const id = userId.rows[0].id

        const query = `SELECT * FROM guess WHERE user_id = $1;`

        const result = await db.query(query, [id])

        const guesses = result.rows

        return guesses
    }

    static async fetchGuessesByUserId(user_id) {
        const query = `SELECT location,link 
        FROM guess
        JOIN users
        ON users.id = guess.user_id
        WHERE users.id= $1;`;
        const result = await db.query(query, [user_id]);
        const guesses = result.rows;
        return guesses;
      }
    
}

module.exports = Places