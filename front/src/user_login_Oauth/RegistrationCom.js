import { useState } from "react"
import SignIp from "./Login_componenets/SignIn"
import SignUp from "./Login_componenets/SignUp"

export default function RegistrationCom({ onClose, profile, setProfile }) { 
    
    const [signe_in, setSigne_in] = useState(false)

    const sign = () => {
        setSigne_in(!signe_in)
    }

    return (
        <div className="modil" onClick={e => e.stopPropagation()}>
            { !signe_in 
                ?   <SignIp profile={profile} setProfile={setProfile} sign={sign} signe_in={signe_in}/>
                :   <SignUp profile={profile} setProfile={setProfile} sign={sign}/>
            }
        </div>
    )
}