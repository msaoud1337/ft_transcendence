import Home from "./home/Home.js"
import Users from "./users/Users.js";
import { useState } from "react";
import "./styles/users.css"

function App() {
    const [show, setshow] = useState(false)
    console.log("from app",show)
    return (
        // <div className="aa">
        //     <button className="red" onClick={() => setshow(true)}>Pop up</button>
        //     <PopupRegistration onClose={() => setshow(false)} show={show} />
        // </div>
        <Home show={show} setshow={setshow}/>
        // <Users />
    )
}

export default App;
