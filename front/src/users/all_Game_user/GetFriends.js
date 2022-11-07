import axios from "axios"
import { useEffect, useState } from "react"
import UserCart from "./UserCart"
export default function Getfriends(){
            
    const token = JSON.parse(localStorage.getItem("user_token"))

    const [friend, setFriends] = useState(null)

    const getdata = () => {
        axios.get("http://localhost:3001/api/users/friends", {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata()
    },[])

    return (
    <div className="all_user_section_1">
        {friend && friend.map(user => {
            return (<UserCart data={user} value_1="remove friend" value_2="Block"/>)
        })}
    </div>
    )
}