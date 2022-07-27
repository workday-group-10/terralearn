const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { PORT } = require("./config")
const security = require("./middleware/security")
const authRoutes = require("./routes/auth")
const placesRoutes = require("./routes/places")

const favoritesRoutes = require("./routes/favorites")


const { BadRequestError, NotFoundError } = require("./utils/errors")

const app = express()
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

//enables cross-origin resource sharing for all origins
app.use(cors(corsOptions))
//parse incoming request bodies with JSON payloads
app.use(express.json())
// log request info
app.use(morgan("tiny"))
app.use(security.extractUserFromJwt)

app.use("/auth", authRoutes)
//added places routes here
app.use("/places", placesRoutes)

app.use("/favorites",favoritesRoutes)


app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((err, req,res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message, status},
    })
})


app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`)
} )