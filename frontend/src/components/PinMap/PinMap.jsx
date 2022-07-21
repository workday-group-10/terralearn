
import * as React from "react"
import "./PinMap.css"
import { useState } from "react"
import MyMapComponent from "../Map/Maps"

export default function PinMap() {
  const [isMarkerShown,setisMarkerShown] = useState(true)
  return (
    <div className="pin-map">
        <h1>PinMap</h1>
       <MyMapComponent isMarkerShown = {isMarkerShown }/>
    </div>
  )
}
