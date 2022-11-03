
import { useEffect, useState } from 'react'
import axios from 'axios'
import Manage_user from './Manage_user'

export default function Get_all_Users() {

    const [allUser , setAllUser] = useState(null)

    const [users , setusers] = useState(true)
    const [friend, setFrirend] = useState(false)
    const [Blocked, setBlocked] = useState(false)
    
    const token = JSON.parse(localStorage.getItem("user_token"))


    const Get_all_Users = () => {
        axios.get("http://localhost:3001/api/users/all_users",{
            Authorization : `Bearer ${token}`
        })
        .then(res => setAllUser(res.data))
    }

    useEffect(() => {
        Get_all_Users()
    },[])

    const renderFriends = () => {
        setFrirend(true)
        setBlocked(false)
        setusers(false)
    }
    
    const renderBlocked = () => {
        setBlocked(true)
        setFrirend(false)
        setusers(false)
    }
    
    const renderAllUser = () => {
        setusers(true)
        setFrirend(false)
        setBlocked(false)
    }

    {users && console.log("users")}
    {friend && console.log("friend")}
    {Blocked && console.log("blocked")}
    
    return (
        <div className='all_user_container'>
            <Manage_user renderAllUser={renderAllUser} renderBlocked={renderBlocked} renderFriends={renderFriends}/>
            <hv className="hv"></hv>
            <div className='all_users_section_2'>
                <div></div>
            </div>
        </div>
    )
} 