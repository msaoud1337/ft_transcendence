import { useEffect,useState } from "react"
import axios from "axios"
import UserCart from "./UserCart"

export default function GetBlocked(obj) {
    return (
    <>
        {obj.blocked && obj.blocked.map(user => {
            return (<UserCart data={user} value_1="Unblock" value_2="Block"/>)
        })}
        {!obj.blocked && <div>You have no Blocked user yet</div>} 
    </>
    )
}