const {UnauthorizedError ,BadRequestError, NotFoundError} = require("../utils/errors");
const db = require("../db");
  
class Feedback {


    //fetches feedback from certain user

    static async fetchFeedbackFromUser(user_id) {
        const query = `SELECT * FROM feedback WHERE user_id= $1;`;
        const result = await db.query(query, [user_id]);
        const feedback = result.rows;
        return feedback;
    }

    //fetches feedback from all users who have submitted feedback
    static async fetchFeedback() {
        const query = `SELECT * FROM feedback;`;
        const result = await db.query(query);
        const feedback = result.rows;
        return feedback;
    }

    //adds feedback to sql table
    static async addFeedback(feedback){
        const requiredFields = ["user_id", "page", "paragraph"]
        requiredFields.forEach(field => {
            if(!feedback.hasOwnProperty(field)){
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })
        const query = `
        INSERT INTO feedback(user_id, page, paragraph)
            VALUES ($1, $2, $3)
            RETURNING user_id, page, paragraph;
        `;
        const result = await db.query(query, [feedback.user_id, feedback.page, feedback.paragraph])

        const feedbackResults = result.rows
        
        return feedbackResults
    }


}
module.exports = Feedback;
