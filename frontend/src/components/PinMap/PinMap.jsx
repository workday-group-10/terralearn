import * as React from "react";
import "./PinMap.css";
import { useState } from "react";
import MyMapComponent from "../Map/Maps";

export default function PinMap({positions,setPositions}) {
  const [isMarkerShown, setisMarkerShown] = useState(true);

  // const [positions, setPositions] = useState({});


export default function PinMap({guessed,setGuessed}) {
  const [isMarkerShown,setisMarkerShown] = useState(true)

  const [positions,setPositions]=useState({})
  console.log(Object.keys(positions).length)

  if(Object.keys(positions).length>0)
  {
    setGuessed(true)
  }
 
  
  //set the marker of the google api to true

  return (
    <div className="pin-map">
       <MyMapComponent guessed={guessed} setGuessed={setGuessed} isMarkerShown = {isMarkerShown } positions={positions} setPositions={setPositions}/>
    </div>
  );
}
}
