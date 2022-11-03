import Bar from "./all_Game_user/AllUserData"
import line from "../images/Line.svg"


export default function Friends({setRender}) {
    return (
        <div>
            <Bar name="Friends" setRender={setRender}/>
            <img src={line} alt="" />
        </div>
    )
}