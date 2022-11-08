
import { useEffect, useState } from 'react'
import axios from 'axios'
import Manage_user from './Manage_user'
import UserCart from './UserCart'
import Getfriends from './GetFriends'
import GetBlocked from './GetBlocked'


export default function Get_all_Users({profile}) {

    const [allUser , setAllUser] = useState(null)
    const [userStat, setUserStat] = useState("all_users")
    const [particuliereData, setparticuliereData] = useState({})

    useEffect(() => {

        axios.get("http://localhost:3001/api/users/all_users")
        .then(res => {
            setAllUser(res.data)
            setparticuliereData({...particuliereData, allUserNbr : res.data.length})
        })
        .catch(err => console.log(err))

    },[])

    const renderFriends = () => {
        setUserStat("friends")
    }
    
    const renderBlocked = () => {
        setUserStat("blocked_users")
    }
    
    const renderAllUser = () => {
        setUserStat("all_users")
    }

    return (
        <div className='all_user_container'>
            <Manage_user 
                renderAllUser={renderAllUser} 
                renderBlocked={renderBlocked} 
                renderFriends={renderFriends}
                userStat={userStat}
                allUserNbr={particuliereData.allUserNbr ? particuliereData.allUserNbr : 0}
                FriendNbr={particuliereData.friendNbr ? particuliereData.friendNbr : "..."}
                // BlockedNbr={}
            />
            <hv className="hv"></hv>
            <div className='all_users_section_2'>
                {userStat === "friends" && <Getfriends particuliereData={particuliereData} setparticuliereData={setparticuliereData}/>}
                {userStat === "blocked_users" && <GetBlocked particuliereData={particuliereData} setparticuliereData={setparticuliereData} />}
                {(allUser && userStat === "all_users") && allUser.map((user, i) => {
                    return (<UserCart key={i} data={user} value_1="Add_friend" value_2="Block"/>)
                })}
            </div>
        </div>
    )
} 