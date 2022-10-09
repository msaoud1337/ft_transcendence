import Section from "./Section";
import Secendbar from "./Secendbar";
import PopupRegistration from "../user_login_Oauth/Popupregistration.js";
import Login_user from "../user_login_Oauth/Login_user";
import React,{useState} from "react";

function Home({ show, setshow }) {
    const [ profile, setProfile ] = useState(null);
    return (
        // <di>
            <Login_user profile={profile}    setProfile={setProfile} />
        // </div>
        // <div className="root">
        //     <Section setshow={setshow} />
        //     <Secendbar />
        //     <PopupRegistration
        //         show={show}
        //         onClose={() => setshow(false)} />
        // </div>
    )
}

export default Home;