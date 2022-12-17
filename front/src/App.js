import Home from "./home/Home.js";
import Users from "./users/Users.js";
import { useEffect, useState } from "react";
import "./styles/users.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar.js";
import axios from "axios";
import image from "./images/default_profile.png";
import Notification from "./users/Notification/Notification.js";
import { useSelector } from "react-redux";

function App() {
  const [show, setshow] = useState(false)
  const [notification, setNotification] = useState(null)
  const [profile, setProfile] = useState(null)
  const [notifOn, setNotifOn] = useState(false)

  const displayNotification = () => {
      console.log(notifOn)
      setNotifOn(!notifOn)
  }

  useEffect(() => {

      const token = JSON.parse(localStorage.getItem("user_token"))
      axios.get("http://localhost:3001/api/users/me", {
          headers : {
              "Authorization" : `Bearer ${token}`
          }
      })
      .then(response => {
          setProfile(response.data)
      })
      .catch(err => console.log(err))

      axios.get("http://localhost:3001/api/users/pending-friends/",{
          headers : {
              Authorization : `Bearer ${token}`
          }
      })
      .then(response => setNotification(response.data))
      .catch(err => console.log(err))

  },[])

  {profile && !profile.avatar_url && setProfile({...profile, avatar_url : image})} // adding the default avatar to users

  return (
    <Router>
        <div className="App">
            <Navbar profile={profile} setProfile={setProfile} setshow={setshow} displayNotification={displayNotification}/>
            {notifOn ? <Notification notification={notification} displayNotification={displayNotification} /> : null}
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
  );
}

export default App;
