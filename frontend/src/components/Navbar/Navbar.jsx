/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Navbar.css'
import { useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { useNavigate, Link,useLocation } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import earthIcon from '../assets/earth-icon.png'
import { useAuthContext } from "../contexts/auth";
import apiClient from "../services/apiClient"
import { useState } from 'react';
import { useCountriesContext } from '../contexts/countries';


export default function Navbar({CategoriesArray,SetCategoriesArray}) {
  const { appState, setAppState, loggedIn, setIsLoggedIn, navbarName,setNavbarName } = useAuthContext();
  const navigate = useNavigate()

  const {Countries} = useCountriesContext()

  

  

  const handleLogout = async () => {
    await apiClient.logoutUser();
    setAppState({});
    setNavbarName("Guest")
    setIsLoggedIn(false);
    navigate("/login")
   
  };
  const[showSearch,SetShowSearch]= useState(false)
  const [search, setSearch] = useState("")

  
  ////////////Check if useLocation is Favorite
  const location = useLocation();
  var pathname = location.pathname

  useEffect(()=>{

    if (pathname=="/allcategories")
    {
     
      SetShowSearch(true)
      
    }
    else{
      SetShowSearch(false)
    }
  })
  useEffect(()=>{
  if (Countries)
  {
    SetCategoriesArray(Countries)
  }
  },[Countries])


  
 
//   let countries_array = [...Countries]
// /////SSearch Functionality
//   if (search.length > 0) {
//     // If the search is not empty
    

    
//     const matches = Countries?.filter(element => {
     
//   if (element.country.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
//     return true;
//       }
     
// });
//  countries_array = matches
 
//   }
//   var countries=[]
 
//   useEffect(()=>{
//     countries =countries_array
    
//   },[countries_array])

//   useEffect(()=>{
    
//     SetCategoriesArray(countries)
//     console.log("countries",CategoriesArray)
//   },[])


let handleOnSearchChange = (event) => {

  setSearch(event.target.value) 

}


//   SetCategoriesArray(Countries.filter( product => {
//     return (product.country.toLowerCase().includes(search.toLowerCase()))
//   }))
// }

useEffect(()=>{
 

  const matches = Countries.filter(element => 
     element.country.toLowerCase().indexOf(search.toLowerCase()) !== -1   
  );
  SetCategoriesArray(matches)

},[search])

  
 




  //function that routes user to specific landing page depending on whether
  // they are logged in or not
  const navigateLanding = () => {
    // 
    if (loggedIn){
      navigate("/PostLoginlanding")
    } else{
      navigate("/")
    }
  
   }
   //function that navigates user to profile

    const navigateProfile = () => {
      navigate("/profile")
    }

    //navigates user to your information page
    const navigateInfo = () => {
      navigate("/yourinfo")
    }
    //navigates user to your leaderboard
    const navigateLeader = () => {
      navigate("/leaderboard")
    }
  let logNav = "Navbar_option"
  let preNav = "close"
  
  //logic for displaying different options on navbar depending on if user
  //is logged in or not
  if(loggedIn){
    logNav = "close";
    preNav = "Navbar_option";
  } else {
    logNav = "Navbar_option";
    preNav = "close";
  }
  // 
  // 

  // const handleLogout = async () => { 
  //   await apiClient.logoutUser();     
  //   setIsLoggedIn(false)
  //   setAppState({})
  // }
 {/* {<AccountCircleIcon className="account_icon"/>} */}
  return (
    <div className="Navbar">
      {/* logo that routes user back to landing page */}
      <div className="Navbar_logo" >
        {/* <IconButton onClick={navigateLanding}> */}
          <Avatar alt="Guest" src={earthIcon} onClick={navigateLanding}/>
        {/* </IconButton> */}
        <div className='Logo_Name'>
          <span className="Navbar_optionLineOne">TerraLearn</span>

        </div>
      
      </div>
      
{/* {Display search only in AllCategories Tab} */}
{showSearch ? <div className="Navbar_search">
        
        
        <input className="Navbar_search_input" type="text" onChange={handleOnSearchChange}/>
           {<SearchIcon className="Navbar_searchIcon"/>}
        
      </div>:<div className='imiginary_search'>
        
        
        </div>}
     
      {/* routes to different pages throughout webpage */}
      <div className="Navbar_nav">
        <div className={logNav}>
          <span className="Navbar_optionLineOne">Hello Guest</span>
          <span className="Navbar_optionLineTwo"><Link className="nav-u" to="/login">Sign In</Link></span>
        </div>
        <div className={preNav}>
          <span className="Navbar_optionLineOne">Hello {navbarName},</span>
          <span className="Navbar_optionLineTwo" onClick={handleLogout}>Sign Out</span>
        </div>
        <div className={preNav}>
          <span className="Navbar_optionLineOne">Your</span>
          <span className="Navbar_optionLineTwo"><Link className="nav-u" to="/favorites">
            Favorites
            </Link>
            </span>
        </div>
        <div className={preNav}>
          <span className="Navbar_optionLineOne">All</span>
          <span className="Navbar_optionLineTwo"><Link className="nav-u" to="/allcategories">
            Categories
            </Link>
            </span>
        </div>
        <div className={preNav}>
          <span className="Navbar_optionLineOne">Your</span>
          <span className="Navbar_optionLineTwo" onClick={navigateInfo}>Info</span>
        </div>
        <div className="Navbar_option">
          <span className="Navbar_optionLineOne">View</span>
          <span className="Navbar_optionLineTwo" onClick={navigateLeader}>Leaderboard</span>
        </div>
        
      </div>
      {/* icon of user profile picture and username */}
      <div className='dropdown'>
        <div className="profile_logo" >
          <Avatar alt="image of profile icon" className="pro_pic" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png" onClick={navigateProfile}/>
          <div className='profile_name'>
            <span className="nav-user" onClick={navigateProfile}>{navbarName.toUpperCase()}</span>
          </div>
        </div>
        {/* dropdown menu of options person can choose when hovering over profile */}
        <div className="dropdown-content">
          <ul>
            <li>
              <a className="dropdown-item" href="/profile">Profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="/yourinfo">Your Guesses</a>
            </li>
            <li>
              <a className="dropdown-item" href="/feedback">Feedback</a>
            </li>
          </ul>
          </div>
      </div>




    </div>
  )
}

