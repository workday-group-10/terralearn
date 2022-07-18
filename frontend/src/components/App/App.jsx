
import './App.css'
import * as React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from "../Register/Register"
import Login from "../Login/Login"
//import InstructionsPage from "../InstructionsPage/InstructionsPage"
import PostLoginLanding from '../PostLoginLanding/PostLoginLanding'




function App() {


  return (
    <div className="App">
       <React.Fragment>
       <BrowserRouter>
       <main>
        <Navbar/>
        <Routes>
             <Route path ="/" element = {<PostLoginLanding/>}/> 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
