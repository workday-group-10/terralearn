import "./InstructionsPage.css";
import { useNavigate } from "react-router-dom";
export default function InstructionsPage() {
  const navigate = useNavigate()

  const handleSubmit = () =>{
    navigate("/countdown")
  }


  return (
    <div className = "instructions-page">
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

            <div className="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            </div>
        <div className="instructions-card">
            <h1 className="header">The instructions</h1>
            <ol className="details">
            <li>You will be dropped into a Street View panoroma of a place in the world</li>
            <li>Your job is to use geographical markers to find out where you are</li>
            <li>You will drop a pin on where you think you are</li>
            <li>After guessing you will be given points, and a short biography of the location</li>
            <li>Have fun!</li>
            </ol>
        </div>
        <div><button className="start-button" onClick={handleSubmit}>Start</button></div>
    </div>
  );
}