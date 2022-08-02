import react from "react"
import "./ProfilePage.css"
import { useAuthContext } from "../contexts/auth";
import {useState, useEffect} from "react"

export default function ProfilePage({userType, setUserType}) {
    //gets users info from usecontext
    const { appState, pastGameInfo } = useAuthContext();
  
    // useStates that will reference users past games
    const [recent_score, setRecentScore] = useState(0)
    const [recent_category, setRecentCategory] = useState("N/A")
    const [best_country, setBestCountry] = useState("N/A")
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

    const options = [
        { label: 'Tourist', value: 'tourism' },
        { label: 'Student', value: 'education' },
        { label: 'Medical Proffessional', value: 'healthcare' },
      ];

    const [value, setValue] = useState('tourism');

    const handleChange = (event) => {
      setUserType(event.target.value);
      setValue(event.target.value);
    }

    const Dropdown = ({ label, value, options, onChange }) => {
        return (
          <label>
            {label}
            <select value={value} onChange={onChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        );
      };

   
    return (
    <div className="profile-page">
            <div className='light x1'></div>
            <div className='light x2'></div>
            <div className='light x3'></div>
            <div className='light x4'></div>
            <div className='light x5'></div>
            <div className='light x6'></div>
            <div className='light x7'></div>
            <div className='light x8'></div>
            <div className='light x9'></div>
            <div className="bg-animation">
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            <div id="stars5"></div>
            </div>
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
            <div className="current-user">You currently want games to display information about {userType}.</div>
            <Dropdown
                className = "dropdown"
                label="What kind of user are you  "
                options={options}
                value={value}
                onChange={handleChange}
                />
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



