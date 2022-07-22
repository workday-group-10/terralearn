<<<<<<< HEAD
import MapComponent from "../Map/Map"
import * as React from "react"
import "./PinMap.css"
import { useState } from "react"

export default function PinMap() {
  const [isMarkerShown,setisMarkerShown] = useState(true)
  return (
    <div className="pin-map">
        <h1>PinMap</h1>
       <MapComponent isMarkerShown = {isMarkerShown }/>
=======

import * as React from "react"
import "./PinMap.css"
import { useState } from "react"
import MyMapComponent from "../Map/Maps"

export default function PinMap() {
  const [isMarkerShown,setisMarkerShown] = useState(true)

  const [positions,setPositions]=useState({})
  
  //set the marker of the google api to true

  return (
    <div className="pin-map">
       <MyMapComponent isMarkerShown = {isMarkerShown } positions={positions} setPositions={setPositions}/>
>>>>>>> 4f27e4e333eceb5d57c3aa354767d7d134f535cd
    </div>
  )
}
