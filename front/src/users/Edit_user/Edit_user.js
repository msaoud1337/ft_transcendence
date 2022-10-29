import React, { useState } from "react";
import "../../styles/edit_user.css"
import edit from "../../images/edit_icone.svg"

export default function Edit_user({setvalue, setProfile,profile}) {
    
    const [images, setImages] = useState(profile.avatar_url)
    
    const test = () => {
        const input = document.querySelector("input")
        input.click()
        console.log(profile)
    }

    const change = (e) => {
        console.log(e.target.files)
        setImages(URL.createObjectURL(e.target.files[0]))
    }
    
    const saveChanges = () => {
        const inputValue = document.querySelector(".display_name_input")
        setProfile({...profile, 
            display_name : inputValue.value ? inputValue.value : profile.display_name, 
            avatar_url : images
        })
        setvalue()
    }

    return (
        <div className="modal" onClick={setvalue}>
            <div className="edit_user" onClick={e => e.stopPropagation()}>
                <div className="edit_user_container">
                    <div>
                        <img src={images} alt="" className="image"/>
                        <img src={edit} alt="" className="edit_icone" onClick={test}/>
                    </div>
                    <input type="file" alt="" className="image_input" onChange={change}/>
                    <input type="text" alt="" className="display_name_input" placeholder="Username"/>
                </div>
                <div className="edit_data_buttons">
                    <button className="cancel" onClick={setvalue}>Cancel</button>
                    <button className="save" onClick={saveChanges}>Save</button>
                </div>
            </div>
        </div>
    )
}