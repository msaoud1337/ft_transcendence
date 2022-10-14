import Section from "./Section";
import Secendbar from "./Secendbar";
import PopupRegistration from "../user_login_Oauth/Popupregistration.js";
import Login_user from "../user_login_Oauth/Login_user";

function Home({ show, setshow, profile, setProfile }) {
    return (
        <div className="root">
            <Section setshow={setshow} />
            <Secendbar />
            <PopupRegistration
                show={show}
                onClose={() => setshow(false)}
                profile={profile}
                setProfile={setProfile}
            />
        </div>
    )
}

export default Home;