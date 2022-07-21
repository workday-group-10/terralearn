import React from "react";
import Banner from "../Banner/Banner";
import "./LandingPage.css"
import { useAuthContext } from "../contexts/auth";
import { useNavigate, Link } from "react-router-dom"
export default function LandingPage() {
  const { appState, setAppState, loggedIn, setIsLoggedIn, navbarName,setNavbarName } = useAuthContext();
  const navigate = useNavigate()
  const navigatePostLanding = () => {
    
    navigate("/PostLoginlanding")
    
  }

  return (
    <div className="landingPage">
    <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

            <div class="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            </div>
      <div className="landingPageContainer">
        {/* <Banner /> */}
        <div className="planet"> 
        <div className="wrap">
        <div className="background"></div> 
        </div>
        <div className="mask"></div>
        </div>
        <div className="button-container">
        <div className="titles">
            <h2 className="title-one">Learn About </h2>
            <h1 className="title-two">Your Home</h1>
            </div>
            <button className="btn" onClick={navigatePostLanding}>Play</button>
        </div>
      </div>
    </div>
  );
}
