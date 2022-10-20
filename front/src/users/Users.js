import History from "./History"
import Friends from "./Friends"
import Information from "./Information"

export default function Users({ profile }) {
    return (
        <div className="Users_page">
            <div className="Users_container">
                <Information profile={profile} />
                    <div className="History_friends">
                        <History profile={profile}/>
                        <Friends />
                    </div>
            </div>
        </div>
    )
}