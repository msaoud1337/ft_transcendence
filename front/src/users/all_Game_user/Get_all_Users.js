
import { useEffect, useState } from 'react'
import axios from 'axios'
import Manage_user from './Manage_user'
import UserCart from './UserCart'
import Getfriends from './GetFriends'
import GetBlocked from './GetBlocked'


export default function Get_all_Users({profile}) {

    const [allUser , setAllUser] = useState(null)
    const [friend, setFriend] = useState(null)
    const [blocked, setBlocked] = useState(null)
    const [userStat, setUserStat] = useState("all_users")

                
    const token = JSON.parse(localStorage.getItem("user_token"))

    useEffect(() => {

        //request to get all users from backend
        axios.get("http://localhost:3001/api/users/all_users")
        .then(res => {
            setAllUser(res.data.filter(user => user.user_name !== profile.user_name))
        })
        .catch(err => console.log(err))

        //request to get friends 
        axios.get("http://localhost:3001/api/users/friends", {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        .then(res => {
            setFriend(res.data)    
        })
        .catch(err => console.log(err))

        //request to get blocked_user 
        axios.get("http://localhost:3001/api/users/blocked-friends", {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        .then(res => {
            setBlocked(res.data)
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

    if (friend)
        console.log(allUser.find(fr => {return(fr.user_name === "chadi")}))

    return (
        <div className='all_user_container'>
            <Manage_user 
                renderAllUser={renderAllUser} 
                renderBlocked={renderBlocked} 
                renderFriends={renderFriends}
                userStat={userStat}
                allUserNbr={allUser ? allUser.length : 0}
                FriendNbr={friend ? friend.length : 0}
                BlockedNbr={blocked ? blocked.length : 0}
            />
            <hv className="hv"></hv>
            <div className='all_users_section_2'>
                {userStat === "friends" && <Getfriends friend={friend} />}
                {userStat === "blocked_users" && <GetBlocked blocked={blocked}/>}
                {(allUser && userStat === "all_users") && allUser.map((user, i) => {
                    return (
                    <UserCart 
                        key={i}
                        data={user}
                        value_1={(friend && friend.find(fr => {return(fr.user_name === user.user_name)})) ? "Unfriend" : "Add_friend"}
                        value_2={(blocked && blocked.find(bl => {return(bl.user_name === user.user_name)})) ? "Unblock" : "Block"}
                    />)
                })}
            </div>
        </div>
    )
} 