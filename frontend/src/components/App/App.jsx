import "./App.css";
import * as React from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Register/Register";
import LoginPage from "../Login/Login";
import InstructionsPage from "../InstructionsPage/InstructionsPage";
import PostLoginLanding from "../PostLoginLanding/PostLoginLanding";
import LandingPage from "../LandingPage/LandingPage";
import RoundCountdownPage from "../RoundCountdownPage/RoundCountdownPage";
import NotFound from "../NotFound/NotFound";
import GameplayScreen from "../GameplayScreen/GameplayScreen";
import { AuthContextProvider, useAuthContext } from "../contexts/auth";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import GameSummaryPage from "../GameSummaryPage/GameSummaryPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import apiClient from "../services/apiClient"
import { useState } from "react";
import { CitiesContextProvider } from "../contexts/cities";
import YourInformation from "../YourInformation/YourInformation";
import Feedback from "../Feedback/Feedback";



export default function AppContainer() {
  return (
    <AuthContextProvider>
    <CitiesContextProvider>
      <App />
    </CitiesContextProvider>
    </AuthContextProvider>
  );
}

function App() {
  const { appState, setAppState, loggedIn, setIsLoggedIn, navbarName,setNavbarName } = useAuthContext();
  const [positions, setPositions] = useState({});
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [country_id,setCountryId]= useState(null)
  const [location, setLocation] = useState("")
  const [currInfo, setCurrInfo] = useState("");
  const [userPlacesInfo, setUserPlacesInfo] = useState({});



  const handleLogout = async () => {
    await apiClient.logoutUser();
    setAppState({});
    setNavbarName("Guest")
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Navbar handleLogout={handleLogout} user={appState?.user} loggedIn={loggedIn} navbarName={navbarName}  />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/login"
                element={
                  <LoginPage setAppState={setAppState} appState={appState} />
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
                      <PostLoginLanding
                        setAppState={setAppState}
                        appState={appState}
                        user={appState?.user}
                        navbarName={navbarName} setNavbarName={setNavbarName}
                        country_id={country_id}
                        setCountry_id={setCountryId}
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
                      <ProfilePage/>
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
                path="/countdown"
                element={
                  <ProtectedRoute
                    element={<RoundCountdownPage appState={appState} />}
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
                    />}
                  />
                }
              ></Route>

                <Route path="/gameSummary" element={<GameSummaryPage location={location} setLocation={setLocation}  positions={positions} longitude={longitude} latitude={latitude} />} />

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
