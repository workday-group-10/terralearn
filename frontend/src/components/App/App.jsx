
import './App.css'
import * as React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import Register from "../Register/Register"
import Login from "../Login/Login"
import InstructionsPage from "../InstructionsPage/InstructionsPage"
import PostLoginLanding from '../PostLoginLanding/PostLoginLanding'
import LandingPage from '../LandingPage/LandingPage'
import RoundCountdownPage from '../RoundCountdownPage/RoundCountdownPage'
import NotFound from '../NotFound/NotFound'
import GameplayScreen from '../GameplayScreen/GameplayScreen'




function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})



  return (
    <div className="App">
       <React.Fragment>
       <BrowserRouter>
       <main>
        <Navbar user={user} loggedIn={loggedIn}/>
        <Routes>
             <Route path ="/" element = {<LandingPage/>}/> 
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>} />
            <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setUser={setUser}/>} />
            <Route path="*" element={<NotFound/>} />
             <Route path ="/PostLoginlanding" element = {<PostLoginLanding/>}/> 
            <Route path ="/instructions" element = {<InstructionsPage/>}/>
            <Route path ="/countdown" element = {<RoundCountdownPage/>}/>
            <Route path ="/gameplayscreen" element = {<RoundCountdownPage/>}/>
              
          </Routes>
       </main>

       </BrowserRouter>

       </React.Fragment>
      
    
    </div>
  )
}

export default App
