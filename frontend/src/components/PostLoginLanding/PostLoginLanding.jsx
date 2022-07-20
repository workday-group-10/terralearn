import React from 'react';
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import "./PostLoginLanding.css";
import Category from "../CategoriesCard/Category";
export default function PostLoginLanding(props) {
  useEffect(() => {
    props.setNavbarName(props.user.username)
  }, []);
  
  return (
    <div className="home">
       <div className="home_container">
        <Banner />
        <div className="text_titles">
          <span className="title1">Let's Explore</span>
          <span className="title2">The World</span>
         
        </div>
      
      <div className="home_row">
      <Category continent="Europe"/>
        <Category continent="Asia"/>
          <Category continent="Africa"/>
        <Category continent="USA"/>
      
      </div>
      <div className="home_row">
        
      </div>
      <div className="home_row">
      
      </div>
      </div>
    </div>
  );
}
