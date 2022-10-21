import React, { useState } from "react";

export default function Edit_user({setvalue, editUser, setProfile,profile}) {
    
    const [images, setImages] = useState(profile.imageUrl)
    
    
    const test = () => {
        const input = document.querySelector("input")
        input.click()
    }

    const change = (e) => {
        // console.log(e.target.files)
        // setImages([...e.target.files])
        // const image = e.target.files[0]
        // console.log(image)
        // console.log("test" + image)

        setImages(URL.createObjectURL(e.target.files[0]))
        setProfile({...profile, imageUrl : images})
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