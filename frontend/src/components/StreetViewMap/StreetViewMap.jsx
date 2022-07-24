import GoogleMapsStreetView from "../GoogleStreetMaps/GoogleStreetMaps"
import * as React from "react"
import "./StreetViewMap.css"

export default function StreetViewMap() {
  return (
    <div className="streetview-map">
       <GoogleMapsStreetView latitude= { 46.9171876} longitude={17.8951832} />
        
    </div>
  )
}
