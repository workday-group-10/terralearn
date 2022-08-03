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
