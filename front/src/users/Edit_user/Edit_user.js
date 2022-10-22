import React, { useState } from "react";

export default function Edit_user({setvalue, editUser, setProfile,profile}) {
    
    const [images, setImages] = useState(profile.imageUrl)
    
    
    const test = () => {
        const input = document.querySelector("input")
        input.click()
        console.log(profile) 
    }

    const change = (e) => {
        setImages(URL.createObjectURL(e.target.files[0]))
        setProfile({...profile, imageUrl : URL.createObjectURL(e.target.files[0]), name : "saoud"})
        console.log(e.target.files)
        console.log("Hi")
    }

    return (
        <div className="modal" onClick={setvalue}>
            <div className="edit_user" onClick={e => e.stopPropagation()}>
                <img src={profile.imageUrl} style={{height : "5rem", width : "5rem"}}/>
                <input 
                    type="file"  
                    accept="image/*" 
                    multiple
                    onChange={change}
                />
                <div 
                    style={{color : "blue", textDecoration : "underline", cursor : "pointer"}} 
                    onClick={test}>
                        Change your image
                </div>
                     <img src={images}  alt= "" style={{height : "5rem", width : "5rem"}}/>
            </div>
        </div>
    )
}