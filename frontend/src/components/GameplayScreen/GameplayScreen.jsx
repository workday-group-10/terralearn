import * as React from "react"
import "./GameplayScreen.css"
import PinMap from "../PinMap/PinMap"
import StreetViewMap from "../StreetViewMap/StreetViewMap"
import { useNavigate, Link } from "react-router-dom"

export default function GameplayScreen() {
  const navigate = useNavigate()
  function navSummary(){
    navigate("/gameSummary")
  }

  return (
    
    <div className="gameplay-screen">
        <h1>GAMEPLAYSCREEN</h1>
        <div className="round-div">
          <div className="round-text">
            <span className="title-round">Round</span><br/>
            <span>1/1</span>
          </div>
          <div className="score-text">
            <span className="title-round">Score</span><br/>
            <span>0</span>
          </div>
          
        </div>
        <div className="street-div">
        <StreetViewMap/>
        </div>
        
        <div className="user-interact">
            <div className="guess-div">
                <h2 className="game-instruct">Guess the location on the map!</h2>
                <button className="guess-btn" onClick={navSummary}>Guess!</button>
            </div>
            
            <PinMap/>
        </div>
        
        
        <div className="screen-GP"></div>
    </div>
  )
}
