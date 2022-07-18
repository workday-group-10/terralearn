
import './App.css'
import * as React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from "../Register/Register"
import Login from "../Login/Login"




function App() {


  return (
    <div className="App">
       <React.Fragment>
       <BrowserRouter>
       <main>
        <Navbar/>
        <Routes>
            {/* <Route path ="/" element = {<LandingPage/>}/> */}
            <Route path="/login" element={<Login setAppState={setAppState} redirect={redirect} redirectInfo={redirectInfo} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>} />
            <Route path="/register" element={<Register setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} setAppState={setAppState} loggedIn={loggedIn} setLoggedIn={setLoggedIn} appState={appState}/>} />
            {/* <Route path ="/landing" element = {<PostLoginLanding/>}/> */}
            {/* <Route path ="/instructions" element = {<InstructionsPage/>}/> */}
              
          </Routes>
       </main>

       </BrowserRouter>

       </React.Fragment>
      
    
    </div>
  )
}

export default App
