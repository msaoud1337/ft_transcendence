import Home from "./home/Home.js"
import Users from "./users/Users.js";
import { useEffect, useState } from "react";
import "./styles/users.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./home/Navbar.js";
import axios from "axios";
import Context from "./context/Context.js";
import image from "./images/default_profile.png"
 
function App() {
    const [show, setshow] = useState(false)
    
    const [profile, setProfile] = useState(null)
    
    const token = JSON.parse(localStorage.getItem("user_token"))
      
    useEffect(() => {
        const getUser = (token) => {
            axios.get("http://localhost:3001/api/users/me", {
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })
            .then(response => {
                setProfile(response.data)
            })
            .then(err => console.log(err))
        }
        getUser(token, setProfile)
    },[])
    
    {profile && !profile.avatar_url && setProfile({...profile, avatar_url : image})}
    
    return (
        <Router>
            <div className="App">
                <Context>
                    <Navbar profile={profile} setProfile={setProfile} setshow={setshow} />
                </Context>
                <Switch>
                    <Route exact path="/">
                        <Home show={show} setshow={setshow} profile={profile} setProfile={setProfile} />
                    </Route>
                    <Route path="/users">
                        {profile 
                        ? <Users profile={profile} setProfile={setProfile} /> 
                        : <Home show={show} setshow={setshow} profile={profile} setProfile={setProfile} />} 
                    </Route> 
                </Switch>
            </div>
        </Router>
    )
}

export default App;
