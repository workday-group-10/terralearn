import GoogleMapsStreetView from "../GoogleStreetMaps/GoogleStreetMaps"
import * as React from "react"
import "./StreetViewMap.css"
// import {CitiesContextProvider, useCitiesContext } from "../contexts/cities"
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { GEOAPIFY_KEY } from "../constants";

export default function StreetViewMap({latitude, longitude}) {
  // console.log("latitude in street view:", latitude)
  // console.log("longitude in street view:", longitude)
  return (
    <div className="streetview-map">
       <GoogleMapsStreetView latitude={latitude} longitude={longitude} />
    </div>
  )
}
