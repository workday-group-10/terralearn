import react, { useState } from "react"
import "./YourInformation.css"
import { useEffect } from "react"
import { GuessContextProvider, useGuessContext } from "../contexts/guess"
import apiClient from "../services/apiClient"

export default function YourInformationContainer(){
  return (
    <GuessContextProvider >
      <YourInformation />
    </GuessContextProvider>
  )
}
function YourInformation({}) {
  const [guesses, setGuesses] = useState([]);

  const [error, setError] = useState({ guess: "" });
  useEffect(() => {
    fetchGuesses()
  }, []);
  const fetchGuesses = async () => {
    const { data, err } = await apiClient.fetchGuesses();
    if (data) 
    setGuesses(data.guesses);

    if (err) setError(err);
}


  

  return (
    <div className="your-info">
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
        <div className="info-activity">
          <h2>Past Guess Locations</h2>
          {/* table that contains guesses and links to guesses */}
          <div className="table">
            <div className="table-row">
              <h3>Location</h3>
              <h4>Link to Information</h4>
            </div>
            {guesses.map((item, index) => (
              <div className="table-row" key={index}>
                <span className="col4">{item.location}</span>
                <span className="col2"><a href={item.link} target="__blank">{item.link}</a></span>
              </div>
            ))}
            
          </div>
        </div>
      
      
    
    </div>
  )
}
