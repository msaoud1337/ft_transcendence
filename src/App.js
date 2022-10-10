import Home from "./home/Home.js"
import Users from "./users/Users.js";
import { useState } from "react";
import "./styles/users.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./home/Navbar.js";
import Login_user from "./user_login_Oauth/Login_user.js";
function App() {
    const [show, setshow] = useState(false)
    const [profile, setProfile] = useState(null)
    return (
        <Router>
            <div className="App">
                <Navbar profile={profile} setProfile={setProfile} />
                <Switch>
                    <Route exact path="/">
                        <Home show={show} setshow={setshow} />
                    </Route>
                    <Route path="/users">
                        <Users /> 
                    </Route>
                    <Route path="/about">
                        <Login_user profile={profile} setProfile={setProfile} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
