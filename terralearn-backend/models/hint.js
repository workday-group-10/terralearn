const {UnauthorizedError, BadRequestError, NotFoundError} = require("../utils/errors")
const db = require("../db")

class Hint{
    static async getHintForCity(city_id){
        const query = `SELECT * from hint
        WHERE city_id=$1`;
        const result = await db.query(query, [city_id])
       const hint = result.rows
       return hint
    }

    
}
module.exports = Hint

// const query = `SELECT * from hint
//         JOIN cities
//         ON cities.id = hint.city_id
//         WHERE city=$1`;