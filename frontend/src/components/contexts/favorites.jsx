import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from "../services/apiClient";
const FavoritesContext = createContext(null);
export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState({ favorites: "" });
    useEffect(() => {
        const fetchFav = async () => {
            const { data, err } = await apiClient.fetchFavorites();
            if (data) setFavorites(data);
            if (err) setError(err);
        }
        fetchFav()
    } , [])
    const favoritesValue = {
        favorites,
        setFavorites,
    }
    return (
        <FavoritesContext.Provider value={favoritesValue}>
            <>{children}</>
        </FavoritesContext.Provider>
    )
}
export const useFavoritesContext = () => useContext(FavoritesContext)
