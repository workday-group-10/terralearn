import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from "../services/apiClient";
const CitiesContext = createContext(null);
export const CitiesContextProvider = ({ children }) => {
    const [Cities, setCities] = useState([]);
    const [error, setError] = useState({ Cities: "" });
    useEffect(() => {
        const fetchCities = async () => {
            const { data, err } = await apiClient.fetchCities();
            console.log("From CitiesContext", data)
            if (data) setCities(data.Cities);
            if (err) setError(err);
        }
        fetchCities()
    } , [])
    const placeValue = {
        Cities,
        setCities,
    }
    return (
        <CitiesContext.Provider value={placeValue}>
            <>{children}</>
        </CitiesContext.Provider>
    )
}
export const useCitiesContext = () => useContext(CitiesContext)