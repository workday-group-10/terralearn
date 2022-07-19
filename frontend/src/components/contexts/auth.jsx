import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from '../services/apiClient'
const AuthContext = createContext(null)
export const AuthContextProvider = ({ children }) => {
  const [appState, setAppState] = useState([])
  const [navbarName,setNavbarName]= useState("TerraLearn")
  const [error, setError] = useState({ appState: '' })
  const [initialized, setInitialized] = useState(false)
  const [loggedIn,setIsLoggedIn] = useState(false)
  useEffect(() => {
    const fetchUserFromToken = async () => {
      const { data, error } = await apiClient.fetchUserFromToken()
      console.log('From Authcontext', data)
      if (data) {
        setAppState(data)

        setInitialized(true)
        setIsLoggedIn(true)
        setNavbarName(data.user.firstName)
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
  const userValue = {
    appState,
    setAppState,
    error,
    setError,
    initialized,
    loggedIn,
    setIsLoggedIn,
    navbarName,
    setNavbarName
  }
  return (
    <AuthContext.Provider value={userValue}>
      <>{children}</>
    </AuthContext.Provider>
  )
}
export const useAuthContext = () => useContext(AuthContext)
