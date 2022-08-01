import react from "react"
import "./ProfilePage.css"
import { useAuthContext } from "../contexts/auth";
import {useState, useEffect} from "react"

export default function ProfilePage() {
    //gets users info from usecontext
    const { appState, pastGameInfo } = useAuthContext();
  
    // useStates that will reference users past games
    const [recent_score, setRecentScore] = useState(0)
    const [recent_category, setRecentCategory] = useState("USA")
    const [best_country, setBestCountry] = useState("USA")
    const [highest_score, setHighestScore] = useState(0)
    
    //as soon as pastGameInfo loads, it sets the stats to the correct values for the user
    useEffect(() => {
        if(pastGameInfo){
            setRecentScore(pastGameInfo.recentScore.final_score)
            setRecentCategory(pastGameInfo.recentScore.country)
            setBestCountry(pastGameInfo.highScore.highest_country)
            setHighestScore(pastGameInfo.highScore.recent_score) 
        }
        
    }, [pastGameInfo])
   
    return (
    <div className="profile-page">
        <div className="space"></div>
        <div className="profile-card">
            <h1 className="prof-title">Profile Page</h1>
            {/* displays generic profile picture, and users first,last, and username */}
            <div className="profile-div">
                <img alt="image of profile icon" className="prof-pic" src="https://icons-for-free.com/download-icon-profile+profile+page+user+icon-1320186864367220794_512.png" />
                <div className="profile_info">
                    <h1 className="profile_item">{appState.user.username}</h1>
                    <span className="profile-name">{appState.user.firstName}</span>
                    <span className="profile-name">{appState.user.lastName}</span>
                </div>
            </div>
            {/* displays stats of users last and best played games */}
            <div className="game-stats">
                <h1>Last Played Category: {recent_category}</h1>
                <h1>Most Recent Score: {recent_score}</h1>
                <h1>Best Country: {best_country}</h1>
                <h1>Highest Score: {highest_score}</h1>
            </div>
            
            
        </div>
        <div className="space-bottom">
            <h2 className="none">None</h2>
        </div>
        
        
        <img className="profile-background" alt="image of globe" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"/>
    </div>
    )
}
