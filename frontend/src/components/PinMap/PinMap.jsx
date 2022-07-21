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
    </div>
  )
}
