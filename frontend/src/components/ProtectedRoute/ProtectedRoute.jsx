import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth"

import LoginPage from "../Login/Login";



export default function ProtectedRoute({ element })
{
    const { appState, initialized } = useAuthContext()
    const navigate = useNavigate();
    
    if (!initialized)
    {
        return null    
    }
    if (initialized && !appState.user)
    {
            return <LoginPage message= "You must be Logged In"/>
    }
    return <>{element}</>
}