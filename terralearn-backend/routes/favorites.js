


const express = require("express")
const Favorites = require("../models/favorites")
const router = express.Router()

//route to get all countries in db
router.get("/id/:userId", async(req, res, next) => {
    try{
        const userId = Number(req.params.userId);
        const favorites = await Favorites.fetchFavoriteCategory(userId)
        return res.status(201).json({ favorites })
    } catch(err){
        next(err)
    }
})


router.get("/", async(req, res, next) => {
    try{
        const favorites = await Favorites.fetchFavoriteCategory()
      
        return res.status(201).json({ favorites })
    } catch(err){
        next(err)
    }
})


router.post("/addFavorites", async(req, res, next) => {
    try{
        console.log(req.body)
        const guess = await Places.addGuess({ ...req.body })
        // console.log(countries)
        return res.status(201).json({ guess })
    } catch(err){
        next(err)
    }
})

module.exports = router