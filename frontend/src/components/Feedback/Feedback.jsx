import react from "react"
import { useState, useEffect } from "react"
import "./Feedback.css"
import { useAuthContext } from "../contexts/auth";
import apiClient from "../services/apiClient"

export default function Feedback() {
  //use states that will be relevant for connecting to backend
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const {appState} = useAuthContext()
  const [thanks, setThanks] = useState("feedback-close")
  
  //form useState
  const [feedbackForm, setFeedbackForm] = useState({
    user_id: appState.user.id,
    page: "",
    paragraph: "",
  })
  
  // function that is setting up feedbackform usestate
  const handleOnInputChange = (event) => {
    setThanks("feedback-close")
    setFeedbackForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }
  
  //function that uses apiClient to call endpoint in feedback route
  async function addFeedback(form){
    try{
      const {data, error} = await apiClient.addFeedback(form)
      console.log("data from feedback", data)
      if (error) {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
      }
    } catch(error){
      setErrors(error)
    }
  }


// function that calls addFeedback button, resets form, and gives thank you message
const handleOnSubmits = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setThanks("thanks-feedback")
  setErrors((e) => ({ ...e, form: null }));
  addFeedback(feedbackForm)
  setFeedbackForm({
    user_id: appState.user.id,
    page: "",
    paragraph: "",
  })
  
  setIsLoading(false);
};


  return (
    
    <div className="feedback">
        {/* {renders feedback form card} */}
        <div className="feedback-form">
          <h1 className="center-title">Feedback</h1>
          
          {/* {renders form} */}
            <form>
              {/* {input field for page that user is leaving feedback for} */}
              <div className="input-field">
              <label htmlFor="page">Page You're Leaving Feedback On:</label><br/>
              <input
                className="input-bar"
                type="text"
                name="page"
                placeholder="Gameplay Screen"
                value={feedbackForm.page}
                onChange={handleOnInputChange}
              />
              <br/>
                {/* {errors.email && <span className="error">{errors.email}</span>} */}
              </div>
            </form>
            <form>
              {/* {input field for feedback user is leaving} */}
              <div className="input-field">
                <label htmlFor="paragraph">Feedback for Page:</label><br/>
                <input
                  className="paragraph"
                  type="text"
                  name="paragraph"
                  placeholder="The Gameplay Screen should be...."
                  value={feedbackForm.paragraph}
                  onChange={handleOnInputChange}
                />
                {/* {errors.password && <span className="error">{errors.password}</span>} */}
            </div>
            </form>
            
            
            
          {/* submit button */}
          <button className="login-btn" disabled={isLoading} onClick={handleOnSubmits}>
              {isLoading ? "Loading..." : "Submit"}
          </button>
          {/* <button  className="login-btn">Submit</button> */}
          <h2 className={thanks}>Thank you for submitting feedback!</h2>
          </div>
          
        
    </div>
  )
}
