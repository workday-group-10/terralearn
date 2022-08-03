import "./App.css";
import * as React from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Register/Register";
import LoginPage from "../Login/Login";
import InstructionsPage from "../InstructionsPage/InstructionsPage";

import LandingPage from "../LandingPage/LandingPage";
import RoundCountdownPage from "../RoundCountdownPage/RoundCountdownPage";
import NotFound from "../NotFound/NotFound";
import GameplayScreen from "../GameplayScreen/GameplayScreen";
import { AuthContextProvider, useAuthContext } from "../contexts/auth";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import GameSummaryPage from "../GameSummaryPage/GameSummaryPage";
import ProfilePage from "../ProfilePage/ProfilePage";

import { useState, useEffect } from "react";
import { CitiesContextProvider } from "../contexts/cities";
import {CountriesContextProvider, useCountriesContext} from "../contexts/countries"


import PostLoginLandingContainer from "../PostLoginLanding/PostLoginLanding";

import YourInformation from "../YourInformation/YourInformation";
import Feedback from "../Feedback/Feedback";

import FavoriteContainer from "../FavoritesPage/Favorite";
import { ProfileContextProvider } from "../contexts/profile";
import Leaderboard from "../Leaderboard/Leaderboard";

import AllCategoriesContaine from "../AllCategories/AllCategories";


export default function AppContainer() {
  return (
    <AuthContextProvider>
      <CountriesContextProvider>
    <CitiesContextProvider>
    <ProfileContextProvider>
      <App />
      </ProfileContextProvider>
    </CitiesContextProvider>
    </CountriesContextProvider>
    </AuthContextProvider>
  );
}

function App() {
  const { appState, setAppState, loggedIn, setIsLoggedIn, navbarName,setNavbarName } = useAuthContext();
  ////All categories search
  ////
  const [CategoriesArray,SetCategoriesArray]=useState([])
  
  

  const [positions, setPositions] = useState({});
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [country_id,setCountryId]= useState(null)
  const [location, setLocation] = useState("")
  const [currInfo, setCurrInfo] = useState("");
  const [userPlacesInfo, setUserPlacesInfo] = useState({});
  const [selectedCountryId, setSelectedCountryId] = useState(3)
  const [userType, setUserType] = useState("tourism");


//   const [guesses, setGuesses] = useState([]);

//   const [error, setError] = useState({ guess: "" });
//   useEffect(() => {
//     fetchGuesses()
//     // console.log(guesses)
//   }, []);
//   const fetchGuesses = async () => {
//     const { data, err } = await apiClient.fetchGuesses();
//     if (data) 
//     setGuesses(data.guesses);

//     if (err) setError(err);
// }

 

  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Navbar user={appState?.user} loggedIn={loggedIn} navbarName={navbarName} CategoriesArray={CategoriesArray} SetCategoriesArray={SetCategoriesArray}/>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/login"
                element={
                  <LoginPage setAppState={setAppState} appState={appState}  />
                }
              />
              <Route
                path="/register"
                element={
                  <Register setAppState={setAppState} appState={appState} />
                }
              />
              <Route path="*" element={<NotFound />} />

              <Route
                path="/PostLoginlanding"
                element={
                  <ProtectedRoute
                    element={
                      <PostLoginLandingContainer
                        setAppState={setAppState}
                        appState={appState}
                        user={appState?.user}
                        navbarName={navbarName} setNavbarName={setNavbarName}
                        country_id={country_id}
                        setCountry_id={setCountryId}
                        userType={userType} setUserType={setUserType}
                      />
                    }
                  />
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={
                      <ProfilePage userType={userType} setUserType={setUserType} />
                    }
                  />
                }
              ></Route>

              <Route
                path="/instructions"
                element={
                  <ProtectedRoute
                    element={<InstructionsPage appState={appState} />}
                  />
                }
              ></Route>

<           Route
                path="/allcategories"
                element={
                  <ProtectedRoute
                    element={<AllCategoriesContaine appState={appState} CategoriesArray={CategoriesArray} SetCategoriesArray={SetCategoriesArray} setCountryId={setCountryId}/>}
                  />
                }
              ></Route>
              <Route
                path="/yourinfo"
                element={
                  <ProtectedRoute
                    element={<YourInformation/>}
                  />
                }
              ></Route>
              <Route
                path="/feedback"
                element={
                  <ProtectedRoute
                    element={<Feedback/>}
                  />
                }
              ></Route>
              <Route
                path="/leaderboard"
                
                element={<Leaderboard selectedCountryId={selectedCountryId} setSelectedCountryId={setSelectedCountryId}/>}
                  
              ></Route>

              <Route
                path="/countdown"
                element={
                  <ProtectedRoute
                    element={<RoundCountdownPage appState={appState} />}
                  />
                }
              ></Route>
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute
                    element={<FavoriteContainer appState={appState}  setCountry_id={setCountryId} />}
                  />
                }
              ></Route>
      

              <Route
                path="/gameplayscreen"
                element={
                  <ProtectedRoute
                    element={<GameplayScreen location={location} setLocation={setLocation} appState={appState}  positions={positions} setPositions={setPositions}
                        country_id={country_id}
                        setCountry_id={setCountryId}
                        userPlacesInfo={userPlacesInfo}
                        currInfo={currInfo}
                        setCurrInfo={setCurrInfo}
                        setUserPlacesInfo={setUserPlacesInfo}
                      longitude={longitude} setLongitude={setLongitude} latitude={latitude} setLatitude={setLatitude}
                      userType={userType} setUserType={setUserType}
                    />}
                  />
                }
              ></Route>

                <Route path="/gameSummary" element={<GameSummaryPage country_id={country_id} location={location} setLocation={setLocation}  positions={positions} longitude={longitude} latitude={latitude}  />} />

              {/* <Route path="/instructions" element={<InstructionsPage />} />
              <Route path="/countdown" element={<RoundCountdownPage />} />
              <Route path="/gameplayscreen" element={<GameplayScreen />} /> */}
            </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}
