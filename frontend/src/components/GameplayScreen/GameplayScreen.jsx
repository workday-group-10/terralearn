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
import { useAuthContext } from "../contexts/auth";
import apiClient from "../services/apiClient"

export default function GameplayScreen({location, setLocation, positions ,setPositions, latitude, setLatitude,
   longitude, setLongitude, country_id, userPlacesInfo, setCurrInfo, currInfo, setUserPlacesInfo}) {
  const [guessed,setGuessed] = useState(false)
  const {cities, setCities} = useCitiesContext();
  var categorizedCities = [];
  const[error, setError] = useState("")
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState([]);
  const [guessBack, setGuessBack] = useState()
  const {appState} = useAuthContext();
  var stringSpace = ""
  var newString = ""
  
  // filters city context based on where the user chose their category
  function filterCities(){
  for(var i = 0; i < cities.length; i++){
  if(cities[i].category_id == country_id){
  categorizedCities.push(cities[i])
  }
  }
}

  const navigate = useNavigate()
  function navSummary(){
    if (guessed==true)
    {
      setGuessBack({})
      navigate("/gameSummary")
    }
  }
  //adds location and link to information about place to backend 
  async function addGuessB(){
    try{
      const {data, error} = await apiClient.addGuess(guessBack)
    } catch(error){
      setError(error)
    }
  }

  //calls all functions on page render
  useEffect(() => {
    setIsFetching(true);
    filterCities();
    fetchData();
  }, []);

    //API call to geoapify to get places given the place_id from our filtered city context
    const fetchData = async () => {
      var i =  Math.floor(Math.random() *20);

      const { data } = await axios.get(`https://api.geoapify.com/v2/places?categories=tourism&filter=place:${categorizedCities[0].place_id}&limit=20&apiKey=${GEOAPIFY_KEY}`)
      setData(data);
      //sets location, latitude, longtitude of place guessed
      setLocation(data.features[i].properties.name);
      setLatitude(data.features[i].properties.lat);
      setLongitude(data.features[i].properties.lon);
      
      //New Feature commented not done yet
       stringSpace = data.features[i].properties.address_line1;
     
       newString = stringSpace.replace(/\s/g, '%20')
      
       setCurrInfo("https://www.google.com/search?q=" + newString);
           
      setIsFetching(false)      
  }
  //sets useState that goes to backend, then calls api
   //sets useState that goes to backend, then calls api
   useEffect(() => {
    if(isFetching == false){
      if (location!="" && currInfo!="")
      {
        setGuessBack({user_id: appState.user.id, location: location, link: currInfo});
      }
    }
  }, [isFetching]);
  useEffect(()=>{
    if (guessBack?.location != "" && guessBack?.link != "")
    {
      addGuessB();
    }
  },[guessBack])

  return (
    <div className="gameplay-screen">
      {isFetching && <LoadingSpinner/>}
      {!isFetching && (
        <div className="google_street">
        <StreetViewMap latitude={latitude} longitude={longitude}/>
        </div>
      )};
        <div className="google_map">
          <PinMap guessed={guessed} setGuessed={setGuessed} positions={positions}  setPositions={setPositions}/>

          <button onClick={navSummary}>Guess</button>
        </div>
      </div>
  )
      }


