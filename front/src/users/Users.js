import History from "./History"
import Friends from "./Friends"
import Information from "./Information"
import { useState } from "react"
import Get_all_Users from "./all_Game_user/Get_all_Users"

export default function Users({ profile , setProfile }) {

    const [renderAllusers, setRenderAllusers] = useState(false)
 
    const setRender = () => {
        console.log("clicked ")
        setRenderAllusers(!renderAllusers)
    }

    console.log("render all user", renderAllusers)
    return (
        <div className="Users_page">
            {!renderAllusers 
            ? <div className="Users_container">
                <Information profile={profile} setProfile={setProfile}/>
                    <div className="History_friends">
                        <History profile={profile} setRender={setRender}/>
                        <Friends setRender={setRender}/>
                    </div>
            </div>
            :  <Get_all_Users />
            }
        </div>
    )
}