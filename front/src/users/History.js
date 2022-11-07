import His from "./His";
import "../styles/users.css"
import Line from "../images/Line.svg"
import AllUserData from "./all_Game_user/AllUserData";

export default function History({profile, setRender}) {
    return (
        <div className="History_container">
            <AllUserData name="History" setRender={setRender} profile={profile}/>
            <img src={Line} alt=""/>
            <His profile={profile}/>
        </div>
    )
}