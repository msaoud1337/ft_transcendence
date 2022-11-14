
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import Image2 from "../images/2.png"
import image from "../images/default_profile.png"
import { useEffect, useState } from 'react'
import axios from 'axios'
import RoutingElement from './RoutingElement'

function Navbar({profile, setProfile, setshow, displayNotification}) {

    const logOut = () => {
        localStorage.removeItem("user_token")
        setProfile(null)
    }

    return (
        <div className="navBar">
            <img className="pong" src={Image2} alt=""/> 
            <RoutingElement profile={profile} />
            {profile 
            ?   <section className="userName">
                    <FontAwesomeIcon icon={faBell} onClick={displayNotification}/>
                    <div>{profile.user_name}</div>
                    <img className='profile_picture' src={profile.avatar_url ? profile.avatar_url : image} alt="" />
                    <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={logOut} />
                </section>
            :   <button
                    className='sign_up' 
                    onClick={() => setshow(true)}
                    >Sign up
                </button>}
        </div>
    )
}


export default Navbar;