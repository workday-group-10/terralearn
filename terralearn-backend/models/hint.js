const {UnauthorizedError, BadRequestError, NotFoundError} = require("../utils/errors")
const db = require("../db")

class Hint{
    static async getHintForCity(location){
        const query = `SELECT * from hint
        JOIN cities
        ON cities.id = hint.city_id
        WHERE city=$1`;
        const result = await db.query(query, [location])
       const hint = result.rows
       return hint
    }

    
}
module.exports = Hint