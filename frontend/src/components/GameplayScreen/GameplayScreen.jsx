import * as React from "react"
import "./GameplayScreen.css"
import PinMap from "../PinMap/PinMap"
import StreetViewMap from "../StreetViewMap/StreetViewMap"

export default function GameplayScreen() {
  return (
    
    <div className="gameplay-screen">
        <h1>GAMEPLAYSCREEN</h1>
        <StreetViewMap/>
        <div className="user-interact">
            <div className="guess-div">
                <h2 className="game-instruct">Guess the location on the map!</h2>
                <button className="guess-btn">Guess!</button>
            </div>
            
            <PinMap/>
        </div>
        
        
        <div className="screen-GP"></div>
    </div>
  )
}
