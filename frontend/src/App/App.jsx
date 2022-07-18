
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
            {/* <Route path ="/" element = {<LandingPage/>}/>
            <Route path ="/activity" element = {<Activity nutritionItems={nutritionItems} setNutritionItems={setNutritionItems} exer={exer} setExer={setExer} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
            <Route path ="/exercise" element = {<Exercise loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
            <Route path ="/nutrition" element = {<Nutrition nutritionItems={nutritionItems} setNutritionItems={setNutritionItems} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
            <Route path ="/nutrition/create" element = {<CreateNutrition nutritionItems={nutritionItems} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
            <Route path ="/sleep" element = {<Sleep loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
            <Route path="*" element={<NotFound/>}></Route> */}
            <Route path="/login" element={<Login setAppState={setAppState} redirect={redirect} redirectInfo={redirectInfo} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>} />
            <Route path="/register" element={<Register setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} setAppState={setAppState} loggedIn={loggedIn} setLoggedIn={setLoggedIn} appState={appState}/>} />

              
          </Routes>
       </main>

       </BrowserRouter>

       </React.Fragment>
      
    
    </div>
  )
}

export default App
