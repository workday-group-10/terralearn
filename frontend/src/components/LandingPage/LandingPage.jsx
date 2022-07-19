import React from "react";
import Banner from "../Banner/Banner";
import "./LandingPage.css"
export default function LandingPage() {

  return (
    <div className="landingPage">
      <div className="landingPageContainer">
        <Banner />
        <div className="button-container">
            <div className="titles">
            <h2 className="title-one">Learn About </h2>
            <h1 className="title-two">Your Home</h1>
            </div>
           
            <button className="btn">Play</button>
        </div>
      </div>

      <div className="landingPage_row">

      </div>
    </div>
  );
}
