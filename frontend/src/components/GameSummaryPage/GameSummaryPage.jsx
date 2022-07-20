import "./GameSummaryPage.css";
import guessImage from "../assets/guess-image.png"
export default function GameSummaryPage() {
  return (
    <div className="game-summary-page">
        <div className="game-summary-header">
            <h1>Game Summary</h1>
            <hr></hr>
        </div>
        <div >
        <img className="game-summary-image" src={guessImage} alt="guess"/>
        </div>
    </div>
  );
}