import "./GameSummaryPage.css";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import InformationSlideshow from "../InformationSlideshow/InformationSlideshow";
import MySummaryComponent from "../SummaryMap/SumMap";
import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../services/apiClient";
import { useAuthContext } from "../contexts/auth";

export default function GameSummaryPage({location, positions, longitude, latitude, country_id}) {
  //
  //
  // const[location, setLocation] = useState("Paris")
  const [scores, setScore] = useState()
  var stringLat = JSON.stringify(latitude);
    var lat = parseFloat(stringLat);
    var stringLon = JSON.stringify(longitude);
    var lng = parseFloat(stringLon);
  const navigate = useNavigate()

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

  const distanceKm = measure(positions.lat,positions.lng, lat, lng)
  //as soon as distanceKM finishes, setScore takes place
  useEffect(() => {
    setScore(ScorePoints(distanceKm))
  }, [distanceKm])
  

  const percentageDis= PointPercentage(scores)
 
  const {appState} = useAuthContext()
  const [game, setGame] = useState()
  const [error, setErrors] = useState()
  //after setScore is changed and is not null, game is set
  useEffect(() =>{

   if (scores != undefined){
    setGame({
    user_id: appState.user.id,
    final_score: scores,
    category_id: country_id,
    guess_id: 1
  
    })
   }
  }, [scores])

  //after game is set and is not undefined, apicall sends game to backend
  useEffect(() => {
    if (game != undefined){
      
      sendGame()
    } 
    
  }, [game])
  async function sendGame(){
    try{
      const {data, error} = await apiClient.addGame(game)
      // console.log("data sent to backend", data)
      if (error) {
        setErrors(error)
       
      }
    } catch(error){
      setErrors(error)
    
    }
  }
  

  return (
    <div className="game-summary-page">
    <div class="bg-animation">
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            <div id="stars5"></div>
            </div>
      <div className="game-summary-header">
        <h1>Game Summary</h1>
        <hr></hr>
      </div>
      
      <div className="game-summary-image">
        {/*Add the My summary component passing in the pathCoordinates for the two markers and the central Latitude and longitude for the centre of the map */}
     <MySummaryComponent pathCoordinates={pathCoordinates} centLat={centLat} centLng={centLng} isMarkerShown={isMarkerShown} />
        <ProgressBar transitionDuration="2s"  animateOnRender={true} className="progressbar" completed={percentageDis} bgColor='#3084d3' baseBgColor="#385682" labelColor="#FFFFFF" />
        <div className="score-section">
          <div className="distance-score">
            Your score was <span className="distance-title">{distanceKm}km</span> from the correct location
          </div>
          <div className="points">
            {scores} Points
          </div>
        </div>
        <div className="information-slideshow">
        <InformationSlideshow location = {location}/>
        </div>
       
       
        <span className="buttons-span">
          <button className="playAgain-button" onClick={navigateInstructions}>Play Again</button>
          <button className="mainMenu-button" onClick={navigatePostLanding}>Main Menu</button>

        </span>
        </div>
    </div>
  );
}
