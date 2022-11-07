
import { useEffect, useState } from 'react'
import axios from 'axios'
import Manage_user from './Manage_user'
import UserCart from './UserCart'
import Getfriends from './GetFriends'
import GetBlocked from './GetBlocked'


export default function Get_all_Users({profile}) {

    const [allUser , setAllUser] = useState(null)

    const [users , setusers] = useState(true)
    const [friend, setFriends] = useState(false)
    const [Blocked, setBlocked] = useState(false)

    const token = JSON.parse(localStorage.getItem("user_token"))

    {profile && axios.get("http://localhost:3001/api/users/all_users")
        .then(res => console.log(res.data)
        .catch(err => console.log(err))
    )}
        
    axios.get("http://localhost:3001/api/users/friends", {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

    const renderFriends = () => {
        setFriends(true)
        setBlocked(false)
        setusers(false)
    }
    
    const renderBlocked = () => {
        setBlocked(true)
        setFriends(false)
        setusers(false)
    }
    
    const renderAllUser = () => {
        setusers(true)
        setFriends(false)
        setBlocked(false)
    }

    {users && console.log("users")}
    {friend && console.log("friend")}
    {Blocked && console.log("blocked")}


    return (
        <div className='all_user_container'>
            <Manage_user 
                renderAllUser={renderAllUser} 
                renderBlocked={renderBlocked} 
                renderFriends={renderFriends}
                users={users}
                friend={friend}
                Blocked={Blocked}
                numberOfUsers={(users && allUser) ? allUser.length : null}
            />
            <hv className="hv"></hv>
            <div className='all_users_section_2'>
                {friend && <Getfriends/>}
                {Blocked && <GetBlocked />}
                {(allUser && users) && allUser.map(user => {
                    return (<UserCart data={user} value_1="Add_friend" value_2="Block"/>)
                })}
            </div>
        </div>
    )
} 