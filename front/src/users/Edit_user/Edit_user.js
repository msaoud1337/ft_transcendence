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
    }
    
    const changeData = () => {
        const inputValue = document.querySelector(".edit_user_nameInput")
        setProfile({...profile, 
            name : inputValue.value ? inputValue.value : profile.name, 
            imageUrl : images
        })
        setvalue()
    }

    return (
        <div className="modal" onClick={setvalue}>
            <div className="edit_user" onClick={e => e.stopPropagation()}>
                <div className="Edit_user_data_text"> Change your data</div>
                <div className="edit_user_1">
                    <img src={images} className="Edit_profile_picture"/>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={change}
                        style={{display: "none"}}
                        />
                    <div 
                        className="edit_picture_button" 
                        onClick={test}>
                            Change your image
                    </div>
                    <div className="Edit_user_information">
                        <input type="text" className="edit_user_nameInput" placeholder="Entre new name"/>
                    </div>
                    <button className="Apply_change" onClick={changeData}>Apply changes ?</button>
                </div>
            </div>
        </div>
    )
}