const {UnauthorizedError, BadRequestError, NotFoundError} = require("../utils/errors")
const db = require("../db")

class Profile{
    static async changeUserType(userType){
        //guess now has guess.userId
        const requiredFields = ["user_id", "value"]
        requiredFields.forEach(field => {
            if(!userType.hasOwnProperty(field)){
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })

       const query = `UPDATE users SET search_type = $2 WHERE id = $1;`

        const result = await db.query(query, [userType.user_id, userType.value])

       const guessUser = result.rows
        
       return guessUser
    }

    static async fetchUserType(user){
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

        const query = `SELECT search_type FROM users WHERE id = $1;`

        const result = await db.query(query, [id])

        const userType = result.rows

        return userType
    }
}
module.exports = Profile