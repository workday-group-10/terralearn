import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from "../services/apiClient";
const CountriesContext = createContext(null);
export const CountriesContextProvider = ({ children }) => {
    const [Countries, setCountries] = useState([]);
    const [error, setError] = useState({ Countries: "" });
    useEffect(() => {
        const fetchCountries = async () => {
            const { data, err } = await apiClient.fetchCountries();
            //
            if (data) setCountries(data.countries);
            if (err) setError(err);
        }
        fetchCountries()
    } , [])
    const placeValue = {
        Countries,
        setCountries,
    }
    return (
        <CountriesContext.Provider value={placeValue}>
            <>{children}</>
        </CountriesContext.Provider>
    )
}
export const useCountriesContext = () => useContext(CountriesContext)
