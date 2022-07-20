import "./GameSummaryPage.css";
import React from "react";
import guessImage from "../assets/guess-image.png"
import ProgressBar from "@ramonak/react-progress-bar";
export default function GameSummaryPage() {
  return (
    <div className="game-summary-page">
        <div className="game-summary-header">
            <h1>Game Summary</h1>
            <hr></hr>
        </div>
        <div className="game-summary-image">
        <img src={guessImage} alt="guess" />
        <ProgressBar completed={70} bgColor='#6495ed' baseBgColor="#385682" labelColor="#FFFFFF" />
        </div>
    </div>
  );
}