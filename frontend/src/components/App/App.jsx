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
import apiClient from "../services/apiClient"


export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}

function App() {
  const { appState, setAppState, loggedIn, setIsLoggedIn, navbarName,setNavbarName } = useAuthContext();


  console.log("appStateApp", appState);

  const handleLogout = async () => {
    await apiClient.logoutUser();
    setAppState({});
    setNavbarName("TerraLearn")
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
                      />
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
                    element={<GameplayScreen appState={appState} />}
                  />
                }
              ></Route>

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
