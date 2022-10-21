import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles} from "@fortawesome/free-solid-svg-icons"
import {faUserGroup} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import Edit_user from "./Edit_user/Edit_user";
import profil from "../images/profil.svg"
export default function Information({ profile, setProfile }) {

    const [editUser, setEditUser] = useState(false)
    
    {editUser ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"}
    
    const setvalue = () => {
        setEditUser(!editUser)
    }

    return (
        <div className="Information">
            <div className="_info">
                <img src={profile.imageUrl} alt="" className="image_profile"/>
                <div>{profile.name}</div>
            </div>
            <div className="joindate_friends">
                <div className="join_date">
                    <FontAwesomeIcon icon={faCakeCandles} className="icon" />
                    <div>Joined On 1337</div>
                </div>
                <div className="friends_bar">
                    <FontAwesomeIcon icon={faUserGroup}/>
                    <div>Friends : 42</div>
                </div>
            </div>
            <Button value="Edit Profil" setProfile={setProfile} editUser={editUser} setEditUser={setEditUser} setvalue={setvalue}/>
            { editUser
                ? <Edit_user profile={profile} setvalue={setvalue} editUser={editUser}/>
                : null   
            }
        </div>
    )
}