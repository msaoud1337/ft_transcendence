import History from "./History"
import Friends from "./Friends"
import Information from "./Information"
import { useEffect } from "react"

export default function Users({ profile , setProfile }) {
    return (
        <div className="Users_page">
            <div className="Users_container">
                <Information profile={profile} setProfile={setProfile}/>
                    <div className="History_friends">
                        <History profile={profile}/>
                        <Friends />
                    </div>
            </div>
        </div>
    )
}