const express = require("express")
const User = require("../models/user")
const router = express.Router()
const security = require("../middleware/security")
const Profile = require("../models/profile")

router.put("/userType", security.requireAuthenticatedUser, async (req, res, next)=> {
    try{
        const userType = await Profile.changeUserType({...req.body})
        return res.status(201).json({ userType })
    } catch(err){
        next(err)
    }
})


router.get("/userType", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {email} = res.locals.user;
        const user = await User.fetchUserByEmail(email)
        const userType = await Profile.fetchUserType(user)
      return res.status(200).json({userType});
    } catch (err) {
      next(err);
    }
  });
  
module.exports = router