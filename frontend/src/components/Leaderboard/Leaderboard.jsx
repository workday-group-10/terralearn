import react, { useState } from "react"
import "./Leaderboard.css"
import { useEffect } from "react"
import { GuessContextProvider, useGuessContext } from "../contexts/guess"
import apiClient from "../services/apiClient"
import { CountriesContextProvider, useCountriesContext } from "../contexts/countries"

export default function LeaderboardContainer(props){
    return (
      <CountriesContextProvider >
        <Leaderboard selectedCountryId={props.selectedCountryId} setSelectedCountryId={props.setSelectedCountryId}/>
      </CountriesContextProvider>
    )
  }

function Leaderboard(props) {

  //useStates that change as api is called
  const [allScores, setAllScores] = useState([{country: "No Leaderboard Available for Country"}])
  const [errors, setErrors] = useState()
  const [countryHashmap, setCountryHashmap] = useState()
  const [allCountries, setAllCountries] = useState([{country: "No Countries Available"}])
  const {Countries} = useCountriesContext()
  const [countryArr, setCountryArr] =  useState([{country: "No Countries Available"}])
  const [isAC, setIsAC] = useState(false)

  //call to api to get scores for certain countries
  async function getScores(){
    try {
      const {data, error} = await apiClient.fetchGamesForCountry(props.selectedCountryId);
     
      if(data && data.gamesForCountry.length > 0){
          setAllScores(data.gamesForCountry)
      }

    } catch (error) {
      setErrors(error)
    }
  }

  //cal to api to get top scores for all countries overall
  async function getAllScores(){
    try {
      const {data, error} = await apiClient.fetchAllGames();
      if(data){
        setAllCountries(data.allGames)
      }

    } catch (error) {
      setErrors(error)
    }
  }

  //api functions are called as page gets rendered
  useEffect(() => {
    getScores()
    getAllScores()
  }, [])

  //calls api function for certain country every time button is pushed
  useEffect(() => {
    getScores()
    setIsAC(false)
  }, [props.selectedCountryId])

  useEffect(() => {
    setCountryArr(Countries)
  }, [Countries])

  //creates hashmap everytime arr holding scores of certain country changes
  useEffect(() => {
    if (countryArr.length > 1){
      setCountryHashmap(new Map(countryArr.map(i => [i.country, i.id])))
    }
    
  }, [countryArr])

  //as button is pushed, it changes the value of the array holding score
  let tableChange = (country) => {
    if (country != ""){
      props.setSelectedCountryId(countryHashmap.get(country))
      setIsAC(false)
    } else {
      setAllScores(allCountries)
      setIsAC(true)
    }
    

  }

  return (
    <div className="leaderboard">
      {/* css background effects */}
        <div className="bg-effects">
            <div className='light x1'></div>
            <div className='light x2'></div>
            <div className='light x3'></div>
            <div className='light x4'></div>
            <div className='light x5'></div>
            <div className='light x6'></div>
            <div className='light x7'></div>
            <div className='light x8'></div>
            <div className='light x9'></div>
            <div className="bg-animation">
                <div id="stars1"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
                <div id="stars5"></div>
            </div>
        </div>
        <div className="leaderboard-table">
            <h2 className="leader-title">Leaderboard{isAC ? "": ` for ${allScores[0].country}`}</h2>
            {/* renders row of buttons */}
            <div className="leader-row">
              <div className="button-row">
              <button className="country-btn" onClick={() => tableChange("")}>All Countries</button>
                {countryArr.map((item, index) => (
                  <button className="country-btn" key={index} onClick={() => tableChange(item.country)}>{item.country}</button>
                ))}
              </div>
            </div>
            {/* renders table of every top users score for certain countries */}
            <div className="l-table">
                <div className="leader-row">
                    <h3>Rank</h3>
                    <h3>Country</h3>
                    <h3>Username</h3>
                    <h3>Score</h3>
                </div>
                {/* loops over score array to display information */}
                {allScores.map((item, index) => (
                <div className="leader-row" key={index}>
                    <span className="leader-col4">{index+1}</span>
                    <span className="leader-col2">{item.country}</span>
                    <span className="leader-col1">{item.username}</span>
                    <span className="leader-col3">{item.final_score}</span>

                </div>
                ))}
            
            </div>
            
        </div>
    
    </div>
  )
}
