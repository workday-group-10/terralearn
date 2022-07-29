const { Client } = require("pg")
const { getDatabaseUri } = require("./config")
require("colors")

const db = new Client({ connectionString : getDatabaseUri() })

db.connect((err) => {
    if (err) {
        
    } else {
        
    }
})

module.exports = db