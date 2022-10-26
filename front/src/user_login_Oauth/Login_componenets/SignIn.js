import Login_user from "../Login_user";
import "../../styles/Sign.css"

export default function SignIn({profile, setProfile, sign}){
    console.log(profile)
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
                <input placeholder="Username / Email" className="User_name_Input"/>
                <input placeholder="password" className="password_Input"/>
                <div className="Contunie_container">
                    <button className="Contunie_" onClick={Login_request}>Continue</button>
                </div>
            </div>
            <hr className="line"></hr>
            <div className="Join">Not a membre Yet ? <span onClick={sign}>join</span></div>
        </div>
    )
}