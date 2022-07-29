import React, { useEffect } from 'react'
import { useState } from 'react';
import { FavoritesContextProvider, useFavoritesContext } from "../contexts/favorites";
import data from "../data.json"
import "./Favorite.css"




export default function FavoriteContainer() {
    return (
      <FavoritesContextProvider>
      <Favorite/>
      </FavoritesContextProvider>
    );
  }
  

function Favorite() { 


    
    const { favorites } = useFavoritesContext();
    console.log(data)
    


    const [loading,setLoading]= useState(false)
    const [datas,setData]= useState([])

    useEffect (()=>{
        setData(favorites)

        

    },[favorites])

    

    console.log(data)



   

    
  return (
    <div className="favorite-screen">
       <b>{datas?.favorite?.length>0 ? datas.favorite.map((favorite)=>
       
       <div key={favorite.category_id}>
        
        {favorite.category_id}

       </div>) : 'No Favorites Selected'}</b> 
    {/* {
        data.countries. map((item)=>{
            console.log(item)
        })
    } */}

    </div>



  )
}

