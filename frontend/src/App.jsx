
import './App.css'
import * as React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {


  return (
    <div className="App">
       <React.Fragment>
       <BrowserRouter>
       <main>
        <Navbar/>
       </main>

       </BrowserRouter>

       </React.Fragment>
      
    
    </div>
  )
}

export default App
