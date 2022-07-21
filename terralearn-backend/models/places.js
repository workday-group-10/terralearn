const {UnauthorizedError, BadRequestError, NotFoundError} = require("../utils/errors")
const db = require("../db")

class Places{
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

}

module.exports = Places