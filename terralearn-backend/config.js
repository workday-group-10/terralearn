require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const SECRET_KEY = process.env.SECRET_KEY || "supersecretkey"

function getDatabaseUri () {
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "1590"
    const dbHost = process.env.DATABASE_HOST || "localhost"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || "lifetracker"
    

    // if the DATABASE_UL environment var, user that,
    // else create the db connection ourselves
    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

const dbBcrypt = process.env.BCRYPT_WORK_FACTOR || 13

console.log("TerraLearn Registration Config:".red)
console.log("PORT:".blue, PORT)
console.log("Database URI".blue, getDatabaseUri())
console.log("---")


module.exports = {
    PORT,
    dbBcrypt,
    SECRET_KEY,
    getDatabaseUri
}