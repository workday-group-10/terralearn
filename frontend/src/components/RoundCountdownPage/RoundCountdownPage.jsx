import React from "react";
import "./RoundCountdownPage.css";
import Countdown from "react-countdown";
function RoundCountdownPage() {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
        {seconds}
        </span>
      );
    }
  };

  return (
    <div className="CountDownContainer">
        <div className="level">Round 1</div>
        <div  className="countDown" >
        <Countdown date={Date.now() + 3000} renderer={renderer}/>
        </div>
       
     
    </div>
  );
}

export default RoundCountdownPage;
