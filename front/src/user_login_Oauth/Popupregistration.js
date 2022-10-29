import React,{useState} from "react";
import "../styles/modal.css";
import RegistrationCom from "./RegistrationCom";


export default function Popupregistration({ show, onClose,profile, setProfile }) {
    {(show && !profile)? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"}
    return (
        (show && !profile) ? <div className="modal" onClick={onClose}>
            <RegistrationCom
                onClose={onClose}
                profile={profile}
                setProfile={setProfile}
            />
        </div>
        : null
    )
}