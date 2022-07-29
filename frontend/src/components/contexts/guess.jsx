import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from "../services/apiClient";
const guessContext = createContext();
export const GuessContextProvider = ({ children, loggedIn }) => {
    const [guesses, setGuess] = useState([]);
    const [error, setError] = useState({ guess: "" });
    useEffect(() => {
        if(loggedIn){
        const fetchGuess = async () => {
            const { data, err } = await apiClient.fetchGuesses();
            console.log("From guess context", data.guesses)
            if (data) setGuess(data.guesses);
            if (err) setError(err);
        }
        fetchGuess()
    }
    
    } , [loggedIn])
    const guessValue = {
        guesses
    }
    return (
        <guessContext.Provider value={guessValue}>
            <>{children}</>
        </guessContext.Provider>
    )
}
export const useGuessContext = () => useContext(guessContext)