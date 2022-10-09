import Home from "./home/Home.js"
import Users from "./users/Users.js";
import { useState } from "react";
import "./styles/users.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
    const [show, setshow] = useState(false)
    // console.log("from app",show)
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Home show={show} setshow={setshow} />
                    </Route>
                    <Route path="/users">
                        <Users /> 
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
