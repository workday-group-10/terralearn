/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Navbar.css'
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import globe from '../assets/globe.png'
function Header() {
  return (
    <div className="header">
      <div className="header_logo">
      <Avatar alt="Guest" src={globe} />
      </div>
     
      <div className="header_search">
     
        <input className="header_search_input" type="text" />
           {<SearchIcon className="header_searchIcon"/>}
        {/*Logo*/}
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
      </div>
    </div>
  )
}

export default Header
