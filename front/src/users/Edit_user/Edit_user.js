import React, { useState } from "react";
import "../../styles/edit_user.css"

export default function Edit_user({setvalue, editUser, setProfile,profile}) {
    
    const [images, setImages] = useState(profile.imageUrl)
    
    
    const test = () => {
        const input = document.querySelector("input")
        input.click()
        console.log(profile) 
    }

    const change = (e) => {
        console.log(e.target.files)
        setImages(URL.createObjectURL(e.target.files[0]))
        setProfile({...profile, imageUrl : URL.createObjectURL(e.target.files[0])
        })
    }

    const changeName = () => {
        const inputValue = document.querySelector(".edit_user_nameInput")
        setProfile({...profile, name : inputValue.value})
    }

    return (
        <div className="modal" onClick={setvalue}>
            <div className="edit_user" onClick={e => e.stopPropagation()}>
                <img src={profile.imageUrl} style={{height : "5rem", width : "5rem"}}/>
                <input
                    type="file"
                    accept="image/*"
                    onChange={change}
                    style={{display: "none"}}
                />
                <div 
                    style={{color : "blue", textDecoration : "underline", cursor : "pointer"}} 
                    onClick={test}>
                        Change your image
                </div>
                <div className="Edit_user_information">
                    <div onClick={changeName}>enter your new Name</div>
                    <input type="text" className="edit_user_nameInput"/>
                </div>
            </div>
        </div>
    )
}