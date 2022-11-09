
import { useEffect, useState } from 'react'
import axios from 'axios'
import Manage_user from './Manage_user'
import UserCart from './UserCart'

export default function Get_all_Users({profile}) {

    const [allUser , setAllUser] = useState(null)
    const [friend, setFriend] = useState(null)
    const [blocked, setBlocked] = useState(null)
    const [userStat, setUserStat] = useState("all_users")
    const [updates, setUpdates] = useState(false)
                
    const token = JSON.parse(localStorage.getItem("user_token"))
    
    const NewUpdates = () => {
        setUpdates(!updates)
        console.log("new update")
    }

    useEffect(() => {
    
        setTimeout(() => {    

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

    }, 500);

    },[updates])

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
                allUserNbr={allUser ? allUser.length : 0}
                FriendNbr={friend ? friend.length : 0}
                BlockedNbr={blocked ? blocked.length : 0}
            />
            <hv className="hv"></hv>
            <div className='all_users_section_2'>
                {!allUser && <div>loading ...</div>}
                {blocked && !blocked.length && userStat === "blocked_users" && <div>You have no blocked user !</div>}
                {friend && !friend.length &&  userStat === "friends" && <div>You have no friends !</div>}
                {userStat === "friends" && friend.map((user, i) => {
                    return (
                        <UserCart 
                            key={i}
                            data={user}
                            value_1="Unfriend"
                            value_2="Block"
                            NewUpdates={NewUpdates}
                            updates={updates}
                        />
                    )
                })}
                {userStat === "blocked_users" && blocked.map((user, i) => {
                    return (
                        <UserCart 
                            key={i}
                            data={user}
                            value_2="Unblock"
                            NewUpdates={NewUpdates}
                            updates={updates}
                        />
                    )
                })}
                {(allUser && userStat === "all_users") && allUser.map((user, i) => {
                    return (
                        <UserCart 
                            key={i}
                            data={user}
                            value_1={(friend && friend.find(fr => {return(fr.user_name === user.user_name)})) ? "Unfriend" : "Add_friend"}
                            value_2={(blocked && blocked.find(bl => {return(bl.user_name === user.user_name)})) ? "Unblock" : "Block"}
                            NewUpdates={NewUpdates}
                            updates={updates}
                    />)
                })}
            </div>
        </div>
    )
} 