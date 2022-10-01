import Home from "./home/Home.js"
import Users from "./users/Users.js";

import { useState } from "react";
import "./styles/users.css"
import PopupRegistration from "./user_login_Oauth/Popupregistration.js";


function App() {
    const [show, setshow] = useState(false)
    return (
        // <div className="aa">
        //     <button className="red" onClick={() => setshow(true)}>Pop up</button>
        //     <PopupRegistration onClose={() => setshow(false)} show={show} />
        // </div>
        <Home />
        // <Users />
    )
}

export default App;
