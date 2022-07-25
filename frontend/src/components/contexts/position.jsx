import { createContext, useState, useContext, useEffect } from 'react'

const PositionContext = createContext(null);
export const PositionContextProvider = ({ children }) => {
    const [positions, setpositions] = useState([]);
    const [error, setError] = useState({ position: "" });
    
    const positionValue = {
        positions,
        setpositions,
        error,
        setError
    }
    return (
        <PositionContext.Provider value={positionValue}>
            <>{children}</>
        </PositionContext.Provider>
    )
}
export const usePositionContext = () => useContext(PositionContext)