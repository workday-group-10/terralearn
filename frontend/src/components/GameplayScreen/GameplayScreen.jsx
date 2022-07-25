import * as React from "react"
import "./GameplayScreen.css"
import PinMap from "../PinMap/PinMap"
import StreetViewMap from "../StreetViewMap/StreetViewMap"
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { CitiesContextProvider, useCitiesContext } from "../contexts/cities"
import axios from "axios";
import { GEOAPIFY_KEY } from "../constants";

export default function GameplayScreen({positions ,setPositions}) {
  const [guessed,setGuessed] = useState(false)
  const {cities, setCities} = useCitiesContext();
  const[error, setError] = useState("")
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [isFetching, setIsFetching] = useState(false)
  console.log("Data for cities", cities)
  const temp = cities[0].place_id
  console.log(temp)


  const navigate = useNavigate()
  function navSummary(){
    if (guessed==true)
    {
      navigate("/gameSummary")
    }
   
  }
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
        //try{
      const res = await axios.get(`https://api.geoapify.com/v2/places?categories=tourism&filter=place:${temp}&limit=5&apiKey=b85c900cef3a4e65bc26bc65b8b647c4`)
      .then( function(res){
        if (res?.data?.features) {
        console.log("response", res)
        setLatitude(res.data.features[0].properties.lat)
        setLongitude(res.data.features[0].properties.lon)
        }
        else{
          setError("Error fetching.")
        }
      })
    }
    fetchData()
  }, [])
  //     if (res?.data?.features) {
  //       console.log("res:", res)
  //       console.log("Latitude:", res.data.features[0].properties.lat)
  //       console.log("Longitude:", res.data.features[0].properties.lon)
  //       setLatitude(res.data.features[0].properties.lat)
  //       setLongitude(res.data.features[0].properties.lon)
  //     } else {
  //       setError("Error fetching products.")
  //     }
  //   }
  //   catch (err) {
  //     console.log(err)
  //     const message = err?.response?.data?.error?.message
  //     setError(message ?? String(err))
  //   } finally {
  //     setIsFetching(false)
  //   }
  //   fetchData()
  // }


  

  return (
    
    <div className="gameplay-screen">
      
        <div className="google_street">
        <StreetViewMap latitude={latitude} longitude={longitude}/>
        </div>
        <div className="google_map">
          <PinMap guessed={guessed} setGuessed={setGuessed} positions={positions}  setPositions={setPositions}/>

          <button onClick={navSummary}>Guess</button>
        </div>
        
       



        {/* <h1>GAMEPLAYSCREEN</h1>
        <div className="round-div">
          <div className="round-text">
            <span className="title-round">Round</span><br/>
            <span>1/1</span>
          </div>
          <div className="score-text">
            <span className="title-round">Score</span><br/>
            <span>0</span>
          </div>
          
        </div>
        <div className="street-div">
        <StreetViewMap/>
        </div>
        
        <div className="user-interact">
            <div className="guess-div">
                <h2 className="game-instruct">Guess the location on the map!</h2>
                <button className="guess-btn" onClick={navSummary}>Guess!</button>
            </div>
            
            <PinMap/>
        </div>
         */}
        
        {/* <div className="screen-GP"></div> */}
    </div>
  )
}

function measure(lat1, lon1, lat2, lon2){  // generally used geo measurement function
  var R = 6378.137; // Radius of earth in KM
  var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
  var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
  Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d * 1000; // meters
}

function PointPercentage(distance){
  if (distance < 5000)
  {
     return 100;
  }
  else if (distance < 10000)
  {
     return 95;
  }
  else if (distance < 15000)
  {
     return 90;
  }
  else if (distance < 25000)
  {
     return 80;
  }
  else
  {
     return 70;
  }
}

function ScorePoints(percentage){
  let multiplier = percentage / 100;
  return (5000 * multiplier);
}
