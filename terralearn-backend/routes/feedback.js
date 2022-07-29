const express = require("express");
const Feedback = require("../models/feedback");
const router = express.Router();
const security = require("../middleware/security");

//sends feedback to table
router.post("/",security.requireAuthenticatedUser,async (req, res, next) => {
    try {

      const feedback = await Feedback.addFeedback(req.body);
      return res.status(201).json({ feedback });
    } catch (err) {
      next(err);
    }
  }
);

//gets feedback for particular user
router.get("/id/:userId", async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const feedback = await Feedback.fetchFeedbackFromUser(userId);
    return res.status(201).json({ feedback });
  } catch (err) {
    next(err);
  }
});

//gets feedback for every user who has given feedback
router.get("/", async (req, res, next) => {
  try {
    const feedback = await Feedback.fetchFeedback(req.body);
    return res.status(201).json({ feedback });
  } catch (err) {
    next(err);
  }
});



module.exports = router;
