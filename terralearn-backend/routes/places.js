const express = require("express")
const Places = require("../models/places")
const router = express.Router()

//route to get all countries in db
router.get("/", async(req, res, next) => {
    try{
        const countries = await Places.fetchCountries()
        console.log(countries)
        return res.status(201).json({ countries })
    } catch(err){
        next(err)
    }
})
//route to fetch all cities in db
router.get("/cities", async(req, res, next) => {
    try{

        const cities = await Places.fetchCities()
        console.log(cities)
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

module.exports = router