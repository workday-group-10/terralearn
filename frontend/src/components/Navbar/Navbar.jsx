/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Navbar.css'
import { useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { useNavigate, Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import earthIcon from '../assets/earth-icon.png'
import { useAuthContext } from "../contexts/auth";
import apiClient from "../services/apiClient"

function Navbar(props) {
  const { appState, setAppState, loggedIn, setIsLoggedIn, navbarName,setNavbarName } = useAuthContext();
  const navigate = useNavigate()
  const navigateLanding = () => {
    console.log("logo being clicked")
    if (loggedIn){
      navigate("/PostLoginlanding")
    } else{
      navigate("/")
    }
  }
  let logNav = "Navbar_option"
  let preNav = "close"
  
  if(loggedIn){
    logNav = "close";
    preNav = "Navbar_option";
  } else {
    logNav = "Navbar_option";
    preNav = "close";
  }
  console.log("This is the props.user", props.navbarName)
  console.log("User is loggedin: ", loggedIn)

  // const handleLogout = async () => { 
  //   await apiClient.logoutUser();     
  //   setIsLoggedIn(false)
  //   setAppState({})
  // }
 
  return (
    <div className="Navbar">
      <div className="Navbar_logo" >
      {/* <IconButton onClick={navigateLanding}> */}
        <Avatar alt="Guest" src={earthIcon} onClick={navigateLanding}/>
      {/* </IconButton> */}
      <div className='Logo_Name'>
        <span className="Navbar_optionLineOne">{props.navbarName.toUpperCase()}</span>

      </div>
      
      </div>
     
      <div className="Navbar_search">
     
        <input className="Navbar_search_input" type="text" />
           {<SearchIcon className="Navbar_searchIcon"/>}
        {/*Logo*/}
      </div>
      <div className="Navbar_nav">
        <div className={logNav}>
          <span className="Navbar_optionLineOne">Hello Guest</span>
          <span className="Navbar_optionLineTwo"><Link className="nav-u" to="/login">Sign In</Link></span>
        </div>
        <div className={preNav}>
          <span className="Navbar_optionLineOne">Hello {navbarName},</span>
          <span className="Navbar_optionLineTwo" onClick={props.handleLogout}>Sign Out</span>
        </div>
        <div className={preNav}>
          <span className="Navbar_optionLineOne">Your</span>
          <span className="Navbar_optionLineTwo">Info</span>
        </div>
        <div className={preNav}>
          <span className="Navbar_optionLineOne">Your</span>
          <span className="Navbar_optionLineTwo">Modes</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
