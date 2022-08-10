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

  //gets profile context and sets it to user type
  useEffect(() => {
    if(Profile.length != 0){
    setUserType(Profile?.userType[0]?.search_type)
    }
  }, [Profile])
  
  // filters city context based on where the user chose their category
  function filterCities(){
  for(var i = 0; i < cities.length; i++){
  if(cities[i].category_id == country_id){
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
    console.log("props", props)
    console.log("cat cities", categorizedCities)
    console.log("cities", cities)
  }, []);

    //API call to geoapify to get places given the place_id from our filtered city context
    const fetchData = async () => {

      console.log(country_id)
      /////

      if (country_id!=5)
      {
        var i =  Math.floor(Math.random() *20);

        const { data } = await axios.get(`https://api.geoapify.com/v2/places?categories=${userType}&filter=place:${categorizedCities[0].place_id}&limit=20&apiKey=${GEOAPIFY_KEY}`)
        setData(data);
        //sets location, latitude, longtitude of place guessed
        console.log(data.features[i].properties.name)
        setLocation(data.features[i].properties.name);
        setLatitude(data.features[i].properties.lat);
        setLongitude(data.features[i].properties.lon);
        console.log(data)

        
        
        //New Feature commented not done yet
         stringSpace = data.features[i].properties.address_line1;
       
         newString = stringSpace.replace(/\s/g, '%20')
        
         setCurrInfo("https://www.google.com/search?q=" + newString);
             
        setIsFetching(false)   
      }
      else{
        var length= worldData.length
        setDisplayHintButton(true)
     
       
        var i =  Math.floor(Math.random() *length);
        console.log(worldData[i])
        console.log(worldData[i].lat)
        console.log(worldData[i].lng)

        await setLocation(worldData[i].city);
        await setLatitude(worldData[i].lat);
        await setLongitude(worldData[i].lng);

        var hint = Math.floor(Math.random()*3)
        console.log(worldData[i].hint[hint])
        setHint(worldData[i].hint[hint])

        stringSpace = worldData[i].city;
       
        newString = stringSpace.replace(/\s/g, '%20')
       
        setCurrInfo("https://www.google.com/search?q=" + newString);
            
       setIsFetching(false) 

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
        <StreetViewMap latitude={2.2945} longitude={48.8584}/>
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


