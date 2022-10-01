import React from "react";

export default function Popupregistration({show, onClose}) {

    if (show)
        document.body.style.overflow = "hidden"
    else
        document.body.style.overflow = "visible"
    return (
        show ? <div className="modal test1" onClick={onClose}>
            <div className="modil" onClick={e => e.stopPropagation()}>
                <h1>Hello there</h1>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
        : null
    )
}