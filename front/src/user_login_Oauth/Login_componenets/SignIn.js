import Login_user from "../Login_user";
import "../../styles/Sign.css"
import { useState } from "react";

export default function SignIn({profile, setProfile, sign}){
    console.log(profile)

    const Inputvalue = {
        name : "", 
        password : "",
    }

    const Login_request = () => {
        const data_user = {
            user_name: Inputvalue.name,
            display_name: Inputvalue.name,
            password : Inputvalue.password,
        }
        console.log(data_user)
    }

    const changeData_name = (e) => {
        Inputvalue.name = e.target.value
    }

    const changeData_password = (e) => {
        Inputvalue.password = e.target.value
    }

    return (
        <div className="Sign_up_container">
            <div className="Sign_up_pong">Sign In to Pong</div> 
            <div className="Login_user_container">
                <Login_user  profile={profile} setProfile={setProfile}/>
            </div>
             <div className="form-seperator">
                <span>or</span>
            </div>
            <div className="input_containers">
                <input placeholder="Username / Email" className="User_name_Input" onChange={changeData_name}/>
                <input type="password" placeholder="password" className="password_Input" onChange={changeData_password}/>
                <div className="Contunie_container">
                    <button className="Contunie_" onClick={Login_request}>Continue</button>
                </div>
            </div>
            <hr className="line"></hr>
            <div className="Join">Not a membre Yet ? <span onClick={sign}>join</span></div>
        </div>
    )
}