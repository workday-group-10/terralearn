import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from '../services/apiClient'
const AuthContext = createContext(null)
export const AuthContextProvider = ({ children }) => {
  const [appState, setAppState] = useState([])
  const [navbarName,setNavbarName]= useState("TerraLearn")
  const [error, setError] = useState({ appState: '' })
  const [initialized, setInitialized] = useState(false)
  const [loggedIn,setIsLoggedIn] = useState(false)
  const [pastGameInfo, setPastGameInfo] = useState()
  useEffect(() => {
    const fetchUserFromToken = async () => {
      const { data, error } = await apiClient.fetchUserFromToken()
      
      if (data) {
        setAppState(data)

        setInitialized(true)
        setIsLoggedIn(true)
        setNavbarName(data.user.username)
      }
      //checks if there is a user in the appState
      if(appState.user != undefined) {

        getGameInfo();

      }
      


      if (error) {
        setError(error)
      }
    }

    const token = localStorage.getItem('TerraLearn_token')
    if (token) {
      apiClient.setToken(token)
      fetchUserFromToken()
    }
    else {
      setInitialized(true)
    }
  },[])
  //double checks to see if appState is not null
  useEffect(() => {
    getGameInfo()
     
  },[appState])
  //calls apiClient to get users past game info
  async function getGameInfo(){
    try{
      const {data, error} = await apiClient.fetchGamesForUser(appState.user.id);
      setPastGameInfo(data)
      if (error){
      setError(error)
      }
  } catch (err){
      setError(err)
  }
  
  }

  const userValue = {
    appState,
    setAppState,
    error,
    setError,
    initialized,
    loggedIn,
    setIsLoggedIn,
    navbarName,
    setNavbarName,
    pastGameInfo,
    setPastGameInfo

  }
  return (
    <AuthContext.Provider value={userValue}>
      <>{children}</>
    </AuthContext.Provider>
  )
}
export const useAuthContext = () => useContext(AuthContext)
