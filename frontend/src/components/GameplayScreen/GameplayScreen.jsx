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
import worldData from "../worldData.json"
import apiClient from "../services/apiClient"
import { BsFillPatchQuestionFill } from "react-icons/bs";

import { useProfileContext } from "../contexts/profile";
import HintCard from "../HintCard/HintCard"

export default function GameplayScreen({location, setLocation, positions ,setPositions, latitude, setLatitude,
   longitude, setLongitude, country_id, userPlacesInfo, setCurrInfo, currInfo, setUserPlacesInfo, userType, setUserType}) {
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
  const {Profile, setProfiles} = useProfileContext();
  const [hint,setHint]= useState("")
  const [isHint,setisHint] = useState(false) 
  const [displayHintButton,setDisplayHintButton]=useState(false)
  const [currCity, setCurrCity] = useState({city: "Manila"})

  //gets profile context and sets it to user type
  useEffect(() => {
    if(Profile.length != 0){
    setUserType(Profile?.userType[0]?.search_type)
    }
  }, [Profile])
  
  // filters city context based on where the user chose their category
  function filterCities(){
  if(country_id != 5){
  for(var i = 0; i < cities.length; i++){
  if(cities[i].category_id == country_id){
  categorizedCities.push(cities[i])
  }
  }
}
  else{
    for(var i = 0; i < cities.length; i++){
      categorizedCities.push(cities[i])
    }
  }
}

const hintOnclick=()=>{
  setisHint(!isHint)

}
  const navigate = useNavigate()
  function navSummary(){
    if (guessed==true)
    {
      setGuessBack({})
      navigate("/gameSummary")
      setGuessBack({})
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

      // if (country_id!=5)
      // {
        var randomCity = Math.floor(Math.random() * categorizedCities.length);
        
        const { data } = await axios.get(`https://api.geoapify.com/v2/places?categories=${userType}&filter=place:${categorizedCities[randomCity].place_id}&limit=20&apiKey=${GEOAPIFY_KEY}`)
        setData(data);

        console.log(data)
  

        var i =  Math.floor(Math.random() * data.features.length);

        //sets location, latitude, longtitude of place guessed
        setLocation(data.features[i].properties.name);
        setLatitude(data.features[i].properties.lat);
        setLongitude(data.features[i].properties.lon);
        

        
        
        //New Feature commented not done yet
         stringSpace = data.features[i].properties.address_line1;
       
         newString = stringSpace.replace(/\s/g, '%20')
        
         setCurrInfo("https://www.google.com/search?q=" + newString);
             
        setIsFetching(false)
        if(country_id == 5){
          // console.log("in world, category, this is cities", categorizedCities[randomCity].city)
          // setCurrCity({city: categorizedCities[randomCity].city})
          console.log("currCity", currCity)
          fetchHintforCity(randomCity)
        }   

     
  }
  async function fetchHintforCity(randomCity){
    setisHint(true);
    if(randomCity != undefined){
      try {
      console.log(randomCity)
      // const response = await apiClient.fetchHints()
      const {data, error} = await apiClient.fetchHints(randomCity)
      console.log(data)
      // console.log("data", data)
      setHint(data.hintsForCity[0].hint)
      setDisplayHintButton(true)
      console.log("hint on image", hint)
      if(error){
        console.log("eroor", error)
      }
      } catch(error){
        setError(error)
      }
    }
    
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
    // if(guessBack != undefined){
      
    // }
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
      {!isFetching && isHint && (
        <div className="hints">
         <HintCard hint={hint}/> {console.log("Hint")}
        </div>
      )}
      
        <div className="google_map">
          <PinMap guessed={guessed} setGuessed={setGuessed} positions={positions}  setPositions={setPositions}/>

          <button onClick={navSummary}>Guess</button>
        </div>
        {!isFetching && displayHintButton && (
        <div >
        <BsFillPatchQuestionFill className="hint-button" id="hint-button" onClick={hintOnclick}/>
      </div>
      )}
       
      </div>
  )
      }
