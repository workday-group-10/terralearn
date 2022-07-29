const express = require("express")
const Places = require("../models/places")
const router = express.Router()
const security = require("../middleware/security")
const User = require("../models/user")

//route to get all countries in db
router.get("/", async(req, res, next) => {
    try{
        const countries = await Places.fetchCountries()
        // console.log(countries)
        return res.status(201).json({ countries })
    } catch(err){
        next(err)
    }
})
//route to fetch all cities in db
router.get("/cities", async(req, res, next) => {
    try{

        const cities = await Places.fetchCities()
        return res.status(201).json({ cities })
    } catch(err){
        next(err)
    }
})

router.get("/id/:countryId", async(req, res, next) => {
    try{
        const countryId = Number(req.params.countryId);
        const cities = await Places.fetchCitiesByCountryId(countryId)
        return res.status(201).json({ cities })
    } catch(err){
        next(err)
    }
})


router.get("/guess", async(req, res, next) => {
    try{
        const {email} = res.locals.user;
        const user = await User.fetchUserByEmail(email)
        const guesses = await Places.fetchGuessesForUser(user)
        return res.status(201).json({ guesses })
    } catch(err){
        next(err)
    }
})
router.get("/guess/id/:userId", async(req, res, next) => {
    try{
        const userId = Number(req.params.userId);
        const guesses = await Places.fetchGuessesByUserId(userId)
        return res.status(201).json({ guesses })
    } catch(err){
        next(err)
    }
})
//route to add guess to guesstable
router.post("/addGuess", security.requireAuthenticatedUser, async(req, res, next) => {
    try{
       const guesses = await Places.addGuess(req.body)
        return res.status(201).json({ guesses })
    } catch(err){
        next(err)
    }
})

module.exports = router
