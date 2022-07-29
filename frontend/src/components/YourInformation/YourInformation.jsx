import react from "react"
import "./YourInformation.css"
import { useEffect } from "react"
import { GuessContextProvider, useGuessContext } from "../contexts/guess"

export default function YourInformationContainer(){
  return (
    <GuessContextProvider >
      <YourInformation />
    </GuessContextProvider>
  )
}
function YourInformation({}) {
  const {guesses} = useGuessContext()
  console.log("guess in info tab: ", guesses)

  return (
    <div className="your-info">
        <h1>Your Information</h1>
        <div className="info-activity">
          <h2>Past Guess Locations:</h2>
          {/* table that contains guesses and links to guesses */}
          <div className="table">
            <div className="table-header table-row">
              <span className="col x4">Location</span>
              <span className="col x2">Link to Information</span>
            </div>
            {guesses.map((item, index) => (
              <div className="table-row" key={index}>
                <span className="col x4">{item.location}</span>
                <span className="col x2"><a href={item.link} target="__blank">{item.link}</a></span>
              </div>
            ))}
            
          </div>
        </div>
      
      
    
    </div>
  )
}
