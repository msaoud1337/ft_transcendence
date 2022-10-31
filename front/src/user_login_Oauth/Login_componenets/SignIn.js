import Login_user from "../Login_user";
import "../../styles/Sign.css"
import { useState } from "react";
import axios from "axios"

export default function SignIn({profile, setProfile, sign, signup_succes, setsignup_succes}){


    const Login_request = () => {

        const user_name = document.querySelector(".User_name_Input")
        const password = document.querySelector("password_Input")

        axios.post("http://localhost:3001/api/auth/login",
            {
                user_name : user_name.value,
                password : password,
            }
        )
        .then(res => {
            axios.get("http://localhost:3001/api/users/me", {
                headers : {
                    "Authorization" : `Bearer ${res.data}`
                }
            })
            .then(response => {
                setProfile(response.data)
                localStorage.setItem("user_token", JSON.stringify(res.data))
            })
        }
        )
        .catch(err =>{
            console.log(err)
        })
    }

    const click = () => {
        setsignup_succes(false)
        sign()
    }

    return (
        <div className="Sign_up_container">
            <div className="Sign_up_pong">Sign In to Pong</div> 
            <div className="Login_user_container">
                <Login_user  profile={profile} setProfile={setProfile}/>
            </div>
             <div className="form-seperator">
                <span>or</span>
                {signup_succes && <div className="signup_succes">SignUp succes !!</div>}
            </div>
            <div className="input_containers">
                <input placeholder="Username / Email" className="User_name_Input"/>
                <input type="password" placeholder="password" className="password_Input"/>
                <div className="Contunie_container">
                    <button className="Contunie_" onClick={Login_request}>Continue</button>
                </div>
            </div>
            <hr className="line"></hr>
            <div className="Join">Not a membre Yet ? <span onClick={click}>join</span></div>
        </div>
    )
}