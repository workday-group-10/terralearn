
import * as React from "react"
import "./PinMap.css"
import { useState } from "react"
import MyMapComponent from "../Map/Maps"

export default function PinMap() {
  const [isMarkerShown,setisMarkerShown] = useState(true)
  //set the marker of the google api to true

  return (
    <div className="pin-map">
       <MyMapComponent isMarkerShown = {isMarkerShown }/>
    </div>
  )
}
