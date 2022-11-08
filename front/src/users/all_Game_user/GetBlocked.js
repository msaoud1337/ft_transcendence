import { useEffect,useState } from "react"
import axios from "axios"
import UserCart from "./UserCart"

export default function GetBlocked(obj) {

    const token = JSON.parse(localStorage.getItem("user_token"))

    const [Blocked, setBlocked] = useState(null)

    const getdata = () => {
        axios.get("http://localhost:3001/api/users/blocked-friends", {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        .then(res => {
            setBlocked(res.data)
            obj.setparticuliereData({...obj.particuliereData, blockedUsrNbr : res.data.length}) 
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata()
    },[])

    return (
    <>
        {Blocked && Blocked.map(user => {
            return (<UserCart data={user} value_1="Unblock" value_2="Block"/>)
        })}
        {!Blocked && <div>You have no Blocked user yet</div>} 
    </>
    )
}