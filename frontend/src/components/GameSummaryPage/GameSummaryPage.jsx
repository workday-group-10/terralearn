import "./GameSummaryPage.css";
import guessImage from "../assets/guess-image.png";
import { useNavigate } from "react-router-dom";
export default function GameSummaryPage() {
  const navigate = useNavigate()
  const navigateInstructions=()=>{
    navigate("/instructions")
  }
  const navigatePostLanding=()=>{
    navigate("/PostLoginlanding")
  }
  return (
    <div className="game-summary-page">
      <div className="game-summary-header">
        <h1>Game Summary</h1>
        <hr></hr>
      </div>
      <div className="game-summary-image">
        <img src={guessImage} alt="guess" />
      </div>
      <div className="TotalPoints">
        Total Points

      </div>
      <span className="buttons-span">
        <button className="playAgain-button" onClick={navigateInstructions}>Play Again</button>

        <button className="mainMenu-button" onClick={navigatePostLanding}>Main Menu</button>
      </span>
    </div>
  );
}
