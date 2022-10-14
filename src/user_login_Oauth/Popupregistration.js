import React,{useState} from "react";
import "../styles/modal.css";
import RegistrationCom from "./RegistrationCom";


export default function Popupregistration({ show, onClose,profile, setProfile }) {
    const [stayLogin, setStayLogin] = useState(false)
    console.log(show)
    console.log("profile" + profile)
    show ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
    return (
        show ? <div className="modal" onClick={onClose}>
            <RegistrationCom
                onClose={onClose}
                stayLogin={stayLogin}
                click={() => setStayLogin(!stayLogin)}
                profile={profile}
                setProfile={setProfile}
            />
        </div>
        : null
    )
}