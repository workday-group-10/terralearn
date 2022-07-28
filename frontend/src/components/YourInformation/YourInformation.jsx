import react from "react"
import "./YourInformation.css"

export default function YourInformation() {
  //dummy info that will be changed when connected to back end
  //array of objects that contain location user guessed and link to info
  const testArr = [{description: "Paris, France", link: "https://en.wikipedia.org/wiki/Paris"},
  {description: "Paris, France", link: "https://en.wikipedia.org/wiki/Paris"},
  {description: "Paris, France", link: "https://en.wikipedia.org/wiki/Paris"}]


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
            {testArr.map((item, index) => (
              <div className="table-row" key={index}>
                <span className="col x4">{item.description}</span>
                <span className="col x2"><a href={item.link} target="__blank">{item.link}</a></span>
              </div>
            ))}
            
          </div>
        </div>
      
      
    
    </div>
  )
}
