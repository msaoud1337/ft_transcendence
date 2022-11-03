
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import Image from "../images/1.png"
import Image2 from "../images/2.png"
import { Link } from "react-router-dom"
import { DataProvider } from '../context/Context'
import { useContext } from 'react'

function Navbar({profile, setProfile, setshow}) {

    const logOut = () => {
        localStorage.removeItem("user_token")
        setProfile(null)
    }
    
    // const [fakeData, setfakeData] = useContext(DataProvider)

    // console.log(fakeData)
    return (
        <div className="navBar">
            <img className="pong" src={Image2} alt=""/>
            {profile ? <section className="navBar_options">
                <Link to="/">Home</Link>
                <Link>Channels</Link>
                <Link>Game</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
            </section> : <section className='navBar_options'></section>}
            {profile ? <section className="userName">
                    <FontAwesomeIcon icon={faBell} className="fabell"/>
                    <div>{profile.user_name}</div>
                    {   profile.avatar_url ?
                            <img className='profile_picture' src={profile.avatar_url} alt="" />
                            : null
                        }
                <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={logOut} />
                </section>
            : <button className='sign_up' onClick={() => setshow(true)}>Sign up</button>}
        
        </div>
    )
}


export default Navbar;