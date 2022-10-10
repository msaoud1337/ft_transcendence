
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import Image from "../images/1.png"
import Image2 from "../images/2.png"
import { Link } from "react-router-dom"

function Navbar({profile, setProfile}) {
    // console.log(profile.imageUrl)
    const logOut = () => {
        console.log("clicked 1")
        setProfile(null)
    }

    return (
        <div className="navBar">
            <img className="pong" src={Image2} alt=""/>
            <section className="navBar_options">
                <Link to="/">Home</Link>
                <Link>Channels</Link>
                <Link>Game</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
            </section>
            {profile ? <section className="userName">
                    <FontAwesomeIcon icon={faBell} className="fabell"/>
                    <div>{profile.name}</div>
                    <img className='profile_picture' src={profile.imageUrl} alt="" />
                <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={logOut} />
                </section>
            : <button className='sign_up'>Sign up</button>}
        
        </div>
    )
}


export default Navbar;