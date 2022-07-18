const bcrypt = require("bcrypt")
const db = require("../db")
const {workFactor} = require("../config")
const {UnauthorizedError, BadRequestError} = require("../utils/errors")


class User{
    static async makePublicUser(user){
        return{
            id: user.id,
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name,
            username: user.username
        }
    }
    static async login(credentials) {
        //user should submit their email and passwoed
        // if any of these fields are missing, throw an error 
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })
        //lookup the user in the db by email
        const user = await User.fetchUserByEmail(credentials.email)
        //If a user is found, compare the submitted password
        //with the password in the db
        //if there is a match, return the user
        if(user){
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if(isValid){
                return User.makePublicUser(user)
            }
        }
        //
        //if any of this goes wrong, throw an error
        throw new UnauthorizedError("Invalid email/ password combo")
    }
    static async register(credentials){
        console.log(credentials)
       //user should submit their email, pw, first and last name,  
       // if any of these fields are missing, throw an error
        const requiredFields = ["email", "password", "first_name", "last_name", "username"]
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })

        if(credentials.email.indexOf("@") <= 0){
            throw new BadRequestError("invalid email.")
        }
       //make sure no user already exists in the system with that email
       //if one does, throw an error
       const existingUser = await User.fetchUserByEmail(credentials.email)
       if(existingUser){
        throw new BadRequestError(`Duplicate email: ${credentials.email}`)
       }
       const existingUserWithUsername = await User.fetchUserByUsername(credentials.username)
        if (existingUserWithUsername) {
      throw new BadRequestError(`A user already exists with username: ${credentials.username}`)
        }
       //take the users password, and hash it
       const hashedPassword = await bcrypt.hash(credentials.password, parseInt(workFactor))
       //take the users email, and lowercase it
       const lowercasedEmail = credentials.email.toLowerCase()
       //
       //create a new user in the db with all of their info
       const result = await db.query(`
            INSERT INTO users (
                email,
                password,
                first_name,
                last_name,
                username
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, email, first_name, last_name, username;
       `, [lowercasedEmail, hashedPassword, credentials.first_name, credentials.last_name, 
        credentials.username])
       //return the user
       const user = result.rows[0]

       return User.makePublicUser(user)
    }

    static async fetchUserByEmail(email){
        if(!email){
            throw new BadRequestError("no email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }

    static async fetchUserByUsername(username) {
        if (!username) {
          throw new BadRequestError("No username provided")
        }
    
        const query = `SELECT * FROM users WHERE username = $1`
    
        const result = await db.query(query, [username])
    
        const user = result.rows[0]
    
        return user
      }
    

}
module.exports = User