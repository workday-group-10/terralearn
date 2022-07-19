/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Navbar.css'
import { Avatar } from '@material-ui/core';
import { useNavigate, Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import earthIcon from '../assets/earth-icon.png'
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_logo">
      <Avatar alt="Guest" src={earthIcon} />
      <div className='Logo_Name'>
      <span className="Navbar_optionLineOne">TerraLearn</span>

      </div>
      
      </div>
     
      <div className="Navbar_search">
     
        <input className="Navbar_search_input" type="text" />
           {<SearchIcon className="Navbar_searchIcon"/>}
        {/*Logo*/}
      </div>
      <div className="Navbar_nav">
        <div className="Navbar_option">
          <span className="Navbar_optionLineOne">Hello Guest</span>
          <span className="Navbar_optionLineTwo"><Link className="nav-u" to="/login">Sign In</Link></span>
        </div>
        <div className="Navbar_option">
          <span className="Navbar_optionLineOne">Your</span>
          <span className="Navbar_optionLineTwo">Info</span>
        </div>
        <div className="Navbar_option">
          <span className="Navbar_optionLineOne">Your</span>
          <span className="Navbar_optionLineTwo">Modes</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
