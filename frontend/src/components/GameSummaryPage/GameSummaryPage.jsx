import "./GameSummaryPage.css";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import InformationSlideshow from "../InformationSlideshow/InformationSlideshow";
import MySummaryComponent from "../SummaryMap/SumMap";
import { useState } from "react";

export default function GameSummaryPage({positions, longitude, latitude}) {
  console.log(longitude)
  console.log(latitude)
  var stringLat = JSON.stringify(latitude);
    var lat = parseFloat(stringLat);
    var stringLon = JSON.stringify(longitude);
    var lng = parseFloat(stringLon);
  const navigate = useNavigate()
  const guessedPlaceLat =  15.508457
  const guessedPlaceLng= 32.522854

  const navigateInstructions=()=>{
    navigate("/instructions")
  }
  const navigatePostLanding=()=>{
    navigate("/PostLoginlanding")
  }

  const pathCoordinates = [{ lat: positions.lat, lng: positions.lng },{ lat:  lat, lng:  lng},

  ];
  const [isMarkerShown, setisMarkerShown] = useState(true);
  const centLat = (pathCoordinates[0].lat +pathCoordinates[1].lat)/2
  const centLng =  (pathCoordinates[0].lng +pathCoordinates[1].lng)/2


  function measure(lat1, lon1, lat2, lon2) {
    // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
    var dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var score= (d).toFixed(2)
    return (score); // metersfloat_num.toFixed(2);
  }
  
  function PointPercentage(points) {
    var points= (points/5000)*100
    var cent = Math.round(points)
    return cent
   

  }
  
  
  function ScorePoints(distance) {

    return Math.round((5000 * Math.exp(-1 * (6.707329 ** -5)* distance) ))
  }

  const distanceKm = measure(positions.lat,positions.lng,guessedPlaceLat,guessedPlaceLng)

  const scores = ScorePoints(distanceKm)

  const percentageDis= PointPercentage(scores)
 

 
  

  return (
    <div className="game-summary-page">
      <div className="game-summary-header">
        <h1>Game Summary</h1>
        <hr></hr>
      </div>
      
      <div className="game-summary-image">
        {/*Add the My summary component passing in the pathCoordinates for the two markers and the central Latitude and longitude for the centre of the map */}
     <MySummaryComponent pathCoordinates={pathCoordinates} centLat={centLat} centLng={centLng} isMarkerShown={isMarkerShown} />
        <ProgressBar transitionDuration="2s"  animateOnRender={true} className="progressbar" completed={percentageDis} bgColor='#6495ed' baseBgColor="#385682" labelColor="#FFFFFF" />
        <div className="score-section">
          <div className="distance-score">
            Your score was <span className="distance-title">{distanceKm}km</span> from the correct location
          </div>
          <div className="points">
            {scores} Points
          </div>
        </div>
        <div className="information-slideshow">
        <InformationSlideshow/>
        </div>
       
       
        <span className="buttons-span">
          <button className="playAgain-button" onClick={navigateInstructions}>Play Again</button>
          <button className="mainMenu-button" onClick={navigatePostLanding}>Main Menu</button>

        </span>
        </div>
    </div>
  );
}
