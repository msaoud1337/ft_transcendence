import React from "react";
import "../styles/modal.css";
import RegistrationCom from "./RegistrationCom";


export default function Popupregistration({ show, onClose }) {
    console.log(show)
    show ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
    return (
        show ? <div className="modal" onClick={onClose}>
            <RegistrationCom onClose={onClose} />
        </div>
        : null
    )
}