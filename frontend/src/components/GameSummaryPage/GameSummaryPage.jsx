import "./GameSummaryPage.css";
import React from "react";
import guessImage from "../assets/guess-image.png"
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import InformationSlideshow from "../InformationSlideshow/InformationSlideshow";
import MySummaryComponent from "../SummaryMap/SumMap";
import { useState } from "react";

export default function GameSummaryPage({positions}) {
  const navigate = useNavigate()
  const navigateInstructions=()=>{
    navigate("/instructions")
  }
  const navigatePostLanding=()=>{
    navigate("/PostLoginlanding")
  }
  const pathCoordinates = [{ lat: positions.lat, lng: positions.lng },{ lat:  15.508457, lng:  32.522854},
  ];
  const [isMarkerShown, setisMarkerShown] = useState(true);
  const centLat = (pathCoordinates[0].lat +pathCoordinates[1].lat)/2
  const centLng =  (pathCoordinates[0].lng +pathCoordinates[1].lng)/2

  return (
    <div className="game-summary-page">
      <div className="game-summary-header">
        <h1>Game Summary</h1>
        <hr></hr>
      </div>
      
      <div className="game-summary-image">
        {/*Add the My summary component passing in the pathCoordinates for the two markers and the central Latitude and longitude for the centre of the map */}
     <MySummaryComponent pathCoordinates={pathCoordinates} centLat={centLat} centLng={centLng} isMarkerShown={isMarkerShown} />
        <div className="TotalPoints">
          Total Points
        </div>
        <ProgressBar className="progressbar" completed={70} bgColor='#6495ed' baseBgColor="#385682" labelColor="#FFFFFF" />
        <InformationSlideshow/>
        <span className="buttons-span">
          <button className="playAgain-button" onClick={navigateInstructions}>Play Again</button>
          <button className="mainMenu-button" onClick={navigatePostLanding}>Main Menu</button>

        </span>
        </div>
    </div>
  );
}
