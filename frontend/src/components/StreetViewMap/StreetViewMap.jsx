import GoogleMapsStreetView from "../GoogleStreetMaps/GoogleStreetMaps"
import * as React from "react"
import "./StreetViewMap.css"
// import {CitiesContextProvider, useCitiesContext } from "../contexts/cities"
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { GEOAPIFY_KEY } from "../constants";

export default function StreetViewMap({latitude, longitude}) {
  // const {cities, setCities} = useCitiesContext();
  // const[error, setError] = useState("")
  // const [longitude, setLongitude] = useState(0)
  // const [latitude, setLatitude] = useState(0)
  // console.log("Data for cities", cities)
  // useEffect(() => {
  //   const fetchData = async () => {
  //   try {
  //     const res = await axios.get(`https://api.geoapify.com/v2/places?categories=tourism&filter=place:${cities[0].place_id}&limit=20&apiKey=b85c900cef3a4e65bc26bc65b8b647c4`)
  //     if (res?.data?.features) {
  //       setLatitude(res.data.features[0].properties.lat)
  //       setLongitude(res.data.features[0].properties.lon)
  //     } else {
  //       setError("Error fetching products.")
  //     }
  // console.log(res)
  // console.log("Latitude:", res.data.features[0].properties.lat)
  // console.log("Longitude:", res.data.features[0].properties.lon)
  //   }
  //   catch (err) {
  //     console.log(err)
  //     const message = err?.response?.data?.error?.message
  //     setError(message ?? String(err))
  //   }
  // }
  //   fetchData()
  // }, [])
  return (
    <div className="streetview-map">
       <GoogleMapsStreetView latitude={latitude} longitude={longitude} />
    </div>
  )
}
