import "./GameSummaryPage.css";
<<<<<<< HEAD
import guessImage from "../assets/guess-image.png";
import { useNavigate } from "react-router-dom";
=======
import React from "react";
import guessImage from "../assets/guess-image.png"
import ProgressBar from "@ramonak/react-progress-bar";
>>>>>>> 5c77925ad2adcc5f95a7ad33f1167f3d591164e2
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
        <ProgressBar completed={70} bgColor='#6495ed' baseBgColor="#385682" labelColor="#FFFFFF" />
        </div>
    </div>
  );
}
