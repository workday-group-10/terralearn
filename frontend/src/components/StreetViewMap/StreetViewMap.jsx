import GoogleMapsStreetView from "../GoogleStreetMaps/GoogleStreetMaps"
import * as React from "react"
import "./StreetViewMap.css"
import {CitiesContextProvider, useCitiesContext } from "../contexts/cities"

export default function StreetViewMap() {
  const data = useCitiesContext();
  console.log(data)
  return (
    <div className="streetview-map">
       <GoogleMapsStreetView latitude= { 46.9171876} longitude={17.8951832} />
    </div>
  )
}
