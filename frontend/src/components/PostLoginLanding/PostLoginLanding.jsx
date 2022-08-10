import React from 'react';
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import "./PostLoginLanding.css";
import Category from "../CategoriesCard/Category";
import franceIcon from '../assets/France.jpg'
import data from "../data.json"
import { Navigate } from "react-router-dom";
import apiClient from "../services/apiClient"
import axios from 'axios';
import { useState } from 'react';
import { FavoritesContextProvider } from '../contexts/favorites';
import { ProfileContextProvider } from "../contexts/profile";





export default function PostLoginLandingContainer(props)
{
  return(   
    <FavoritesContextProvider>
    <ProfileContextProvider> 
    <PostLoginLanding props={props}/>
    </ProfileContextProvider>
    </FavoritesContextProvider>
  )

}

  function PostLoginLanding(props) {
  var dat= data.countries
  const [values, setValues] = useState(dat)
  props= props.props
 

  

  useEffect(() => {
    props.setNavbarName(props.user.username)
   { <Navigate replace to="/PostLoginlanding" />}
   if (values.length > 3) {
    setValues([])
    console.log("in loop", values)
    for (let i = 0; i < 3; i++) {
      // values.push(dat[i])
      setValues(values => [...values, dat[i]]);
      console.log("values", values)
    }
   }
  
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
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            <div id="stars5"></div>
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
        key={datum.country_name} continent={datum.country_name} Icon={datum.country_image} description={datum.country_description} id={datum.country_id}/>
        )
         

        )
}
  
      </div>
    </div>
  );
}
