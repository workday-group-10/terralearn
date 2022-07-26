import * as React from "react"
import "./GameplayScreen.css"
import PinMap from "../PinMap/PinMap"
import StreetViewMap from "../StreetViewMap/StreetViewMap"
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { CitiesContextProvider, useCitiesContext } from "../contexts/cities"
import axios from "axios";
import { GEOAPIFY_KEY } from "../constants";
import LoadingSpinner from "../LoadingPage/LoadingSpinner"

export default function GameplayScreen({location, setLocation, positions ,setPositions, latitude, setLatitude, longitude, setLongitude, country_id}) {
  const [guessed,setGuessed] = useState(false)
  const {cities, setCities} = useCitiesContext();
  var categorizedCities = [];
  const[error, setError] = useState("")
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState([]);
  

  //console.log(cities)
  //console.log(country_id)
  function filterCities(){
  for(var i = 0; i < cities.length; i++){
  if(cities[i].category_id == country_id){
  categorizedCities.push(cities[i])
  }
  }
  //console.log(categorizedCities)
}


  const navigate = useNavigate()
  function navSummary(){
    if (guessed==true)
    {
      navigate("/gameSummary")
    }
  }
  useEffect(() => {
    setIsFetching(true);
    filterCities();
    fetchData();
  }, []);

    const fetchData = async () => {
      var i =  Math.floor(Math.random() *20);

      const { data } = await axios.get(`https://api.geoapify.com/v2/places?categories=tourism&filter=place:${categorizedCities[0].place_id}&limit=20&apiKey=${GEOAPIFY_KEY}`)
      setData(data);
      //sets location, latitude, longtitude of place guessed
      setLocation(data.features[i].properties.name);
      setLatitude(data.features[i].properties.lat)
      setLongitude(data.features[i].properties.lon)
      setIsFetching(false)
  }

         //console.log("Latitude:", latitude)
         //console.log("Longitude:", longitude)


    //   if (res?.data) {
    //     setLatitude(res.data.features[0].properties.lat)
    //     setLongitude(res.data.features[0].properties.lon)
    //     console.log("res:", res)
    //   } else {
    //     setError("Error fetching products.")
    //   }
    // }
    // catch (err) {
    //   console.log(err)
    //   const message = err?.response?.data?.error?.message
    //   setError(message ?? String(err))
    // } finally {
    //   setIsFetching(false)
    // }

  return (
    <div className="gameplay-screen">
      {isFetching && <LoadingSpinner/>}
      {!isFetching && (
        <div className="google_street">
        <StreetViewMap latitude={latitude} longitude={longitude}/>
        {/* <StreetViewMap/> */}
        </div>
      )};
        <div className="google_map">
          <PinMap guessed={guessed} setGuessed={setGuessed} positions={positions}  setPositions={setPositions}/>

          <button onClick={navSummary}>Guess</button>
        </div>
      </div>
  )
      }


