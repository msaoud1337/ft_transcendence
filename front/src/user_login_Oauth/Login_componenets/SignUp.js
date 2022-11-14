import Login_user from "../Login_user";
import axios from "axios"
import { useState } from "react";


export default function SignUp({profile, setProfile, sign, setsignup_succes}) {

    const [signup_Value, setsignup_Value] = useState(false)

    const confirmData = () => {
        const user_name = document.querySelector(".user_name")
        const password = document.querySelector(".password")
        const password_confirm = document.querySelector(".password_confirm")
   
        axios.post("http://localhost:3001/api/auth/signup", {
            "user_name" : user_name.value,
            "display_name" : user_name.value.substring(0.6),
            "email" : `${user_name.value}@1337.com`
        })
        .then(response => {
            if (response && response.status === 200) {
                sign()
                setsignup_succes(true)
            }
        })
        .catch(err => {
            setsignup_Value(true)
            console.log("test")
        })
    }

    return (
        <div className="Sign_up_container">
            <div className="Sign_up_pong">Sign Up to Pong</div>
            <div className="Login_user_container">
                <Login_user  profile={profile} setProfile={setProfile}/>
            </div>
             <div className="form-seperator">
                <span>or</span>
                {signup_Value && <div className="test_prob">userName or password incorrect check again !!</div>}
            </div>
            <div className="input_containers">
                <input placeholder="Username / Email" className="user_name"/>
                <input type="password" placeholder="password" className="password"/>
                <input type="password" placeholder="Confirm your password" className="password_confirm"/>
                <div className="Contunie_container">
                    <button className="Contunie_" onClick={confirmData}>Continue</button>
                </div>
                <div className="Join">Already membre ?<span onClick={sign}>Sign in</span></div>
            </div>
        </div>
    )
}