// import { createContext, useState, useContext, useEffect } from 'react'
// import apiClient from "../services/apiClient";
// const NutritionContext = createContext(null);
// export const NutritionContextProvider = ({ children }) => {
//     const [nutritions, setNutritions] = useState([]);
//     const [error, setError] = useState({ nutrition: "" });
    
//     useEffect(() => {
//         const fetchNutr = async () => {
//             const { data, err } = await apiClient.fetchNutrition();
//             console.log("From context", data)
//             if (data) setNutritions(data.nutrition);
//             if (err) setError(err);
//         }
//         fetchNutr()
    

    
//     } , [])
//     const nutritionValue = {
//         nutritions,
//         setNutritions,
//     }
//     return (
//         <NutritionContext.Provider value={nutritionValue}>
//             <>{children}</>
//         </NutritionContext.Provider>
//     )
// }
// export const useNutritionContext = () => useContext(NutritionContext)