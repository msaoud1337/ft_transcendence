import Login_user from "./Login_user"
import { useState } from "react"
import SignUp from "./Login_componenets/SignUp"
import SignIn from "./Login_componenets/SignIn"

export default function RegistrationCom({ onClose, profile, setProfile }) { 
    
    const [signe_in, setSigne_in] = useState(false)

    return (
        <div className="modil" onClick={e => e.stopPropagation()}>
            { !signe_in 
                ?   <SignUp profile={profile} setProfile={setProfile}/>
                :   <SignIn />
            }
        </div>
    )
}