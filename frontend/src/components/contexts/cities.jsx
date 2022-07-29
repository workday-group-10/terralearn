import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from "../services/apiClient";
const CitiesContext = createContext(null);
export const CitiesContextProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
    const [error, setError] = useState({ Cities: "" });
    useEffect(() => {
        const fetchCities = async () => {
            const { data, err } = await apiClient.fetchCities();
            //
            if (data) setCities(data.cities);
            if (err) setError(err);
        }
        fetchCities()
    }, [])
    const placeValue = {
        cities,
        setCities,
    }
    return (
        
        <CitiesContext.Provider value={placeValue}>
            <>{children}</>
        </CitiesContext.Provider>
    )
}
export function useCitiesContext() {
    const context = useContext(CitiesContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    //
    return context;
    
}
