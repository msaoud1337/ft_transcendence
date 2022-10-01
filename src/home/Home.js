import Section from "./Section";
import Secendbar from "./Secendbar";
import PopupRegistration from "../user_login_Oauth/Popupregistration.js";

function Home({show, setshow}) {
    return (
        <div className="root">
            <Section setshow={setshow} />
            <Secendbar />
            <PopupRegistration
                show={show}
                onClose={() => setshow(false)} />
        </div>
    )
}

export default Home;