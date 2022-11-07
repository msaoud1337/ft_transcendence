import React, { useEffect, useState } from "react";
import "../../styles/edit_user.css"
import edit from "../../images/edit_icone.svg"
import axios from "axios";

export default function Edit_user({setvalue, setProfile,profile}) {
    
    const [images, setImages] = useState(profile.avatar_url)
    
    let image_data;

    const test = () => {
        const input = document.querySelector("input")
        input.click()
    }
    
    const change = (e) => {
        image_data = e.target.files[0]
        setImages(URL.createObjectURL(e.target.files[0]))
        console.log(e.target.files[0])
    }
    
    const saveChanges = () => {
        
        const inputValue = document.querySelector(".display_name_input")

        const new_name = inputValue.value ? inputValue.value : profile.user_name

        console.log(new_name)

        setProfile({...profile,
            user_name : new_name,
            avatar_url : images,
        })

        {(profile.display_name === new_name) &&
            axios.patch("http://localhost:3001/api/users/update-profile", {
                user_name : new_name,
            }, {
                headers : {
                    Authorization : `Bearer ${JSON.parse(localStorage.getItem("user_token"))}`
                }
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }

        if (profile.avatar_url !== images) {
            const formData = new FormData()
            formData.append("file", images)
            axios.patch("http://localhost:3001/api/users/update-profile", formData, {
                headers : {
                    Authorization : `Bearer ${JSON.parse(localStorage.getItem("user_token"))}`,
                },
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        }
        setvalue() // we close the tab when some data changes
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