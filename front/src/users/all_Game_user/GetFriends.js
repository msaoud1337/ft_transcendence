import axios from "axios"
import { useEffect, useState } from "react"
import UserCart from "./UserCart"



export default function Getfriends(obj){
            
    const token = JSON.parse(localStorage.getItem("user_token"))

    return (
    <>
        {obj.friend && obj.friend.map((user, i) => {
            return (<UserCart key={i} data={user} value_1="remove friend" value_2="Block"/>)
        })}
        {!obj.friend && <div>You have no friends yet</div>}
    </>
    )
}