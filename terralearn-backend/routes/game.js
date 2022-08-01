const express = require("express")
const Game = require("../models/game")
const router = express.Router()
const security = require("../middleware/security")

//endpoint that gets games by user id
router.get("/id/:userId/user", async(req, res, next) => {
    try{
        const userId = Number(req.params.userId);
        const gamesForUser = await Game.fetchGamesByUserId(userId)
        const recentScore = gamesForUser[gamesForUser.length-1]
        const highScore = await Game.fetchHighScore(userId)
        return res.status(201).json({ gamesForUser, recentScore, highScore })
    } catch(err){
        next(err)
    }
})

//endpoint that gets games by user id
router.get("/id/:countryId/country", async(req, res, next) => {
    try{
        const countryId = Number(req.params.countryId);
        const gamesForCountry = await Game.fetchGamesByCountryId(countryId)
        return res.status(201).json({ gamesForCountry })
    } catch(err){
        next(err)
    }
})


//route to add guess to guesstable
router.post("/", security.requireAuthenticatedUser, async(req, res, next) => {
    try{
       const game = await Game.addGame(req.body)
        return res.status(201).json({ game })
    } catch(err){
        next(err)
    }
})

module.exports = router
