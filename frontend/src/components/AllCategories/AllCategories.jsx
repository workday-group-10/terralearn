import Category from "../CategoriesCard/Category";
import React from "react";
import "./AllCategories.css"

import {
  useCountriesContext,
  CountriesContextProvider,
} from "../contexts/countries";

export default function AllCategoriesContaine(props) {
  return (
    <CountriesContextProvider>
      <AllCategories props={props} />
    </CountriesContextProvider>
  );
}

function AllCategories(props) {
  props = props.props;

  var mapArray = props.CategoriesArray;
 

  return (
    <div className="favorite-container">
      <div className='light x1'></div>
            <div className='light x2'></div>
            <div className='light x3'></div>
            <div className='light x4'></div>
            <div className='light x5'></div>
            <div className='light x6'></div>
            <div className='light x7'></div>
            <div className='light x8'></div>
            <div className='light x9'></div>
            <div className="bg-animation">
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            <div id="stars5"></div>
            </div>
      <div className="fav-title">
       All Categories
      </div>
          <div className="favorite-screen">

          
      {mapArray.map((country) => (
        <div className="grid-container" key={country.id}>
          <div key={country.country_name} className="grid-item">
            <Category
              country_id={country.id}
              description={country.descriptions}
              setCountry_id={props.setCountryId}
              key={country.country}
              continent={country.country}
              Icon={country.image_url}
             
              id={country.id}
            />
          </div>
        </div>
      ))}
    </div>

    </div>

  );
}
