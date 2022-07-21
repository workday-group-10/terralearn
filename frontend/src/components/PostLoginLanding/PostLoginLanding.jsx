import React from 'react';
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import "./PostLoginLanding.css";
import Category from "../CategoriesCard/Category";
import franceIcon from '../assets/France.jpg'
import japanIcon from '../assets/MountFuji.jpg'
import capeTownIcon from '../assets/africa-city.jpg'
import newYorkIcon from '../assets/NewYork.jpg'
export default function PostLoginLanding(props) {
  useEffect(() => {
    props.setNavbarName(props.user.username)
  }, []);
  
  return (
    <div className="home">
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

            <div className="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            </div>
       <div className="home_container">
       <div className="post-planet"> 
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
            <button className="btn">Play</button>
        </div>
      </div>
      <div className="break">Most Popular Categories</div>
      <div className="home_row">
      <Category continent="Europe" Icon={franceIcon}/>
        <Category continent="Asia" Icon={japanIcon}/>
          <Category continent="Africa" Icon={capeTownIcon}/>
        <Category continent="USA" Icon={newYorkIcon}/>
      </div>
    </div>
  );
}
