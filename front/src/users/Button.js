import { useState } from "react"




export default function Button({value}) {

    const [editUser, setEditUser] = useState(false)

    const setvalue = () => {
        setEditUser(!editUser)
        console.log(setEditUser)
    }

    return (
        <button className="Edit_profil" onClick={setvalue}>{value}</button>
    )
}