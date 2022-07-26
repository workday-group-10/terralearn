import React from "react";
import "./RoundCountdownPage.css";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function RoundCountdownPage() {
    const navigate = useNavigate()
    const [move,setMove]=useState(false)



    useEffect(() => {
            setTimeout(() => navigate("/gameplayscreen"), 5000)
        }, []);
  // Random component
  const Completionist = () => <div>
     <span>You are good to go!</span>
    </div>
   

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <div>
        <Completionist /> 
        

        </div>;
    } else if (seconds <4) {
      // Render a countdown
      return (
        <span>
        {seconds}
        </span>
      );
    }
    else{
        return "LOADING..."
    }
  };

  return (
    <div className="CountDownContainer">
        <div className="level">Round 1</div>
        <div  className="countDown" >
        <Countdown date={Date.now() + 4000} renderer={renderer}/>
        </div>
       
     
    </div>
  );
}

export default RoundCountdownPage;
