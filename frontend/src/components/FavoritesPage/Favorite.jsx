import Category from "../CategoriesCard/Category";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  FavoritesContextProvider,
  useFavoritesContext,
} from "../contexts/favorites";
import data from "../data.json";
import "./Favorite.css";

export default function FavoriteContainer() {
  return (
    <FavoritesContextProvider>
      <Favorite />
    </FavoritesContextProvider>
  );
}

function Favorite() {
  const { favorites } = useFavoritesContext();

  const [countries, setCountries] = useState([{country_id: 12213, country_name: 'TestCountry', country_description: ' Test Card …, Netherlands, the North Sea, and the Baltic Sea.'}]);
  const [dataFav, setData] = useState([]);
  const [hashmap, setHashmap] = useState({});

  useEffect(() => {
    console.log(Object.values(data.countries));

    setHashmap(Object.values(data.countries));
  }, []);

  useEffect(() => {
    setData(favorites);
  }, [favorites]);

  useEffect(() => {
    if (favorites) {
      if (hashmap.length > 0 && favorites?.favorite?.length > 0) {
        setCountries([])
        for (let i = 0; i < favorites.favorite.length; i++) {

          let tempCountry = hashmap[favorites.favorite[i].category_id - 1];
   

          setCountries((countries) => [...countries, tempCountry]);
        }
      }
    }
  }, [hashmap, favorites]);


  // {favorite.category_id}

  return (

    <div className="favorite-container">
      <div className="fav-title">
        Your Favorites
      </div>
       <div className="favorite-screen">

     
      
{favorites?.favorite?.length>0 ? countries.map((country)=>
(
  <div className="grid-container">
      <div key={country.country_name} className="grid-item">
       <Category 
      country_id={country.country_id}
      key={country.country_name} continent={country.country_name} Icon={country.country_image} description={country.country_description} id={country.country_id}/>
 </div>

  </div>
)
): 'No Favorites Selected'}
 
 

</div>

    </div>
   
  );
}
