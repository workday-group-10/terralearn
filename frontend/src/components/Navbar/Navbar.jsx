/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Navbar.css'
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import earthIcon from '../assets/earth-icon.png'
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_logo">
      <Avatar alt="Guest" src={earthIcon} />
      </div>
     
      <div className="Navbar_search">
     
        <input className="Navbar_search_input" type="text" />
           {<SearchIcon className="Navbar_searchIcon"/>}
        {/*Logo*/}
      </div>
      <div className="Navbar_nav">
        <div className="Navbar_option">
          <span className="Navbar_optionLineOne">Hello Guest</span>
          <span className="Navbar_optionLineTwo">Sign In</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
