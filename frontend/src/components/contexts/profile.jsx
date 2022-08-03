import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from "../services/apiClient";
const ProfileContext = createContext(null);
export const ProfileContextProvider = ({ children, loggedIn}) => {
    const [Profile, setProfiles] = useState([]);
    const [error, setError] = useState({ Profile: "" });

    useEffect(() => {
        const fetchFav = async () => {
            const { data, err } = await apiClient.fetchUserType();
            if (data) setProfiles(data);
            if (err) setError(err);
        }
        fetchFav()
    } , [loggedIn])
    
    const ProfileValue = {
        Profile,
        setProfiles,
        error,
        setError
    }
    return (
        <ProfileContext.Provider value={ProfileValue}>
            <>{children}</>
        </ProfileContext.Provider>
    )
}
export const useProfileContext = () => useContext(ProfileContext)