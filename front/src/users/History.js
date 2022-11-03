import Bar from "./all_Game_user/AllUserData";
import His from "./His";
import "../styles/users.css"
import Line from "../images/Line.svg"

export default function History({profile, setRender}) {
    return (
        <div className="History_container">
            <Bar name="History" setRender={setRender}/>
            <img src={Line} alt=""/>
            <His profile={profile}/>
        </div>
    )
}