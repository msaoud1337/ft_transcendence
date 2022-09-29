
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import Image from "../images/1.png"
import Image2 from "../images/2.png"

function Navbar() {
    return (
        <div className="navBar">
            <img className="pong" src={Image2} alt=""/>
            <section className="navBar_options">
                <div>Home</div>
                <div>Channels</div>
                <div>Game</div>
                <div>Users</div>
                <div>About</div>
            </section>
            <section className="userName">
                <FontAwesomeIcon icon={faBell} className="fabell"/>
                <div>Username</div>
                <img src={Image} alt=""/>
            </section>
        </div>
    )
}


export default Navbar;