const express = require("express");
const Favorites = require("../models/favorites");
const router = express.Router();
const security = require("../middleware/security");
const User = require("../models/user")




//route to get all countries in db

router.get("/", security.requireAuthenticatedUser, async(req, res, next) => {
  try{
      
      const {email} = res.locals.user;
      const user = await User.fetchUserByEmail(email)
      
      const favorite = await Favorites.listFavoritesForUser(user)
      return res.status(201).json({ favorite })
  } catch(err){
      next(err)
  }
})

router.get("/category/:id", security.requireAuthenticatedUser, async(req, res, next) => {
  try{
    const id = Number(req.params.id);

      
      const {email} = res.locals.user;
      const user = await User.fetchUserByEmail(email)
     
      
      const favorite = await Favorites.listCategoryId(user,id)
      
     
      return res.status(201).json({ favorite })

      
  } catch(err){
      next(err)
  }
})




router.post("/add",security.requireAuthenticatedUser ,async (req, res, next) => {
    try {
      //take user email and password and authenticate
      const { user } = res.locals;
      const favorites = await Favorites.addFavorite({ favorite: req.body });
      return res.status(201).json({ favorites });
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/delete", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      const { user } = res.locals;
      const favorites = await Favorites.delete({ favorite: req.body });
      return res.status(201).json({ favorites });
    } catch (err) {
      next(err);
    }
  }
);


router.get("/id/:userId", async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const favorites = await Favorites.fetchFavoriteCategory(userId);
    return res.status(201).json({ favorites });
  } catch (err) {
    next(err);
  }
});

// router.post("/add/:userId", async(req, res, next) => {
//     try{
//         const userId = Number(req.params.userId);
//         const favorite = await Favorites.addFavorite({ userId, ...req.body})
//         return res.status(201).json({ favorite})
//     } catch(err){
//         next(err)
//     }
// })

module.exports = router;
