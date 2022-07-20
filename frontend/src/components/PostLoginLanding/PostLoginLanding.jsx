import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import "./PostLoginLanding.css";
import Category from "../CategoriesCard/Category";
export default function PostLoginLanding(props) {
  props.setNavbarName(props.user.firstName)
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

            <div class="bg-animation">
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
      <Category continent="Europe"/>
        <Category continent="Asia"/>
          <Category continent="Africa"/>
        <Category continent="USA"/>
      </div>
    </div>
  );
}
