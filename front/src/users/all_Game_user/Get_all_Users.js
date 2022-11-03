import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Get_all_Users() {

    const [allUser , setAllUser] = useState(null)

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

    return (
        <div className='all_user_container'>
            <div className='all_users_section_1'>
                <div style={{backGroundColor : "white"}}>
                    <FontAwesomeIcon icon={faUsers}/>
                    <p>All users</p>                    
                </div>
                <div>Friends</div>
                <div>Blocked Users</div>
            </div>
            <div className='all_users_section_2'>
            </div>
        </div>
    )
} 