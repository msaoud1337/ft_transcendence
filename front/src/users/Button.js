import { useState } from "react"




export default function Button({value, setProfile, editUser, setEditUser, setvalue}) {

    return (
        <button className="Edit_profil" onClick={setvalue}>{value}</button>
    )
}