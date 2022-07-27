


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



router.post("/add/:userId", async(req, res, next) => {
    try{
        const userId = Number(req.params.userId);
        const favorite = await Favorites.addFavorite({ userId, ...req.body})
        return res.status(201).json({ favorite})
    } catch(err){
        next(err)
    }
})

module.exports = router