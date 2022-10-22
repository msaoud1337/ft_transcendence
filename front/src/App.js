import Home from "./home/Home.js"
import Users from "./users/Users.js";
import { useState } from "react";
import "./styles/users.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./home/Navbar.js";
import Login_user from "./user_login_Oauth/Login_user.js";
function App() {
    const [show, setshow] = useState(false)
    const [profile, setProfile] = useState(
        localStorage.getItem("login_data")
            ? JSON.parse(localStorage.getItem("login_data"))
            : null
    )
    if (profile)
    {
        // localStorage.setItem("login_data", JSON.stringify(profile))
        console.log("test" , profile)
    }
    return (
        <Router>
            <div className="App">
                <Navbar profile={profile} setProfile={setProfile} setshow={setshow} />
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
