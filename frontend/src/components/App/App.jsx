
import './App.css'
import * as React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from "../Register/Register"
import Login from "../Login/Login"
import InstructionsPage from "../InstructionsPage/InstructionsPage"
import PostLoginLanding from '../PostLoginLanding/PostLoginLanding'
import LandingPage from '../LandingPage/LandingPage'
import RoundCountdownPage from 'components/RoundCountdownPage/RoundCountdownPage'




function App() {


  return (
    <div className="App">
       <React.Fragment>
       <BrowserRouter>
       <main>
        <Navbar/>
        <Routes>
             <Route path ="/" element = {<LandingPage/>}/> 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            { <Route path ="/PostLoginlanding" element = {<PostLoginLanding/>}/> }
            <Route path ="/instructions" element = {<InstructionsPage/>}/>
<<<<<<< HEAD
            <Route path ="/countdown" element = {<RoundCountdownPage/>}/>
=======
>>>>>>> 17af8fdc433e72eab24ba63f7bdbd55b37086026
              
          </Routes>
       </main>

       </BrowserRouter>

       </React.Fragment>
      
    
    </div>
  )
}

export default App
