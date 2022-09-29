import Navbar from "../home/Navbar"
import History from "./History"
import Friends from "./Friends"
import Information from "./Information"


export default function Users() {
    return (
        <div className="Users_page">
            <Navbar />
            <div className="Users_container">
                    <Information />
                    <div className="History_friends">
                        <History />
                        <Friends />
                    </div>
            </div>
        </div>
    )
}
