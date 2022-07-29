import React from 'react';
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import "./PostLoginLanding.css";
import Category from "../CategoriesCard/Category";
import franceIcon from '../assets/France.jpg'
import japanIcon from '../assets/MountFuji.jpg'
import capeTownIcon from '../assets/africa-city.jpg'
import newYorkIcon from '../assets/NewYork.jpg'
import data from "../data.json"
import { Navigate } from "react-router-dom";
import apiClient from "../services/apiClient"
import axios from 'axios';

import { useState } from 'react';
import { FavoritesContextProvider } from '../contexts/favorites';





export default function PostLoginLandingContainer(props)
{
  return(
   <FavoritesContextProvider>
    <PostLoginLanding props={props}/>
   </FavoritesContextProvider>
  )

}

  function PostLoginLanding(props) {
  var dat= data.countries
  var values = dat
  props= props.props
  console.log(props)
  
 

  

  useEffect(() => {
    props.setNavbarName(props.user.username)
   { <Navigate replace to="/PostLoginlanding" />}
     
   
    
  }, []);
  
  

  //after user clicks main play button, page scrolls down to various cards
  const cardRef = useRef(null)
  function scrollToCard(){
    cardRef.current.scrollIntoView() 
  }


  return (
    <div className="home">
    {/* animation stuff ignore this */}
    <ul className="circles">
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

            <div className="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            </div>
       <div className="home_container">
       {/* planet animation */}
       <div className="post-planet"> 
        <div className="wrap">
        <div className="background"></div> 
        </div>
        <div className="mask"></div>
        </div>
        <div className="button-container">
        {/* the word display */}
        <div className="titles">
            <h2 className="title-one">Learn About </h2>
            <h1 className="title-two">Your Home</h1>
            </div>
            <button onClick={scrollToCard} className="play-btn">Play</button>
           
        
        </div>
      </div>
      {/* categories section */}
      <div className="break">Most Popular Categories</div>
      <div ref={cardRef} className="home_row">
        {values.map((datum)=>(
        <Category 
        country_id={props.country_id}
        setCountry_id={props.setCountry_id}
        key={datum.country_name} continent={datum.country_name} Icon={franceIcon} description={datum.country_description} id={datum.country_id}/>
        )
         

        )
}
  
      </div>
    </div>
  );
}
