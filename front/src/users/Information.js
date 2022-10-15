import Button from "./Button";
import Elip from "../images/Ellipse6.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles} from "@fortawesome/free-solid-svg-icons"
import {faUserGroup} from "@fortawesome/free-solid-svg-icons"

export default function Information({ profile }) {
    console.log(profile)
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
            <Button value="Edit Profil"/>
        </div>
    )
}