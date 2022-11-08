import axios from "axios"
import { useEffect, useState } from "react"
import UserCart from "./UserCart"



export default function Getfriends(obj){
            
    const token = JSON.parse(localStorage.getItem("user_token"))

    const [friend, setFriends] = useState(null)

    const getdata = () => {
        axios.get("http://localhost:3001/api/users/friends", {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        .then(res => {
            setFriends(res.data)
            obj.setparticuliereData({...obj.particuliereData, friendNbr : res.data.length})    
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata()
    },[])

    return (
    <>
        {friend && friend.map((user, i) => {
            return (<UserCart key={i} data={user} value_1="remove friend" value_2="Block"/>)
        })}
        {!friend && <div>You have no friends yet</div>}
    </>
    )
}