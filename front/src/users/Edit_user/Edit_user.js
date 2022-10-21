import React, { useState } from "react";
import ImageUploading from 'react-images-uploading';
import Upload from "./Upload";

export default function Edit_user({setvalue, editUser, profile}) {
    
    const [images, setImages] = useState(profile.imageUrl)

    console.log(editUser)

    const test = () => {
        const input = document.querySelector(input)
        console.log(input)        
    }

    return (
        <div className="modal" onClick={setvalue}>
            <div className="edit_user">
                <img src={profile.imageUrl}/>
                <input type="file"  accept="image/*" />
                <div style={{color : "Red"}} onClick={test}>Click here</div>
            </div>
        </div>
    )
}