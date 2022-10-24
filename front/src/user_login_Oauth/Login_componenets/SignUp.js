import Login_user from "../Login_user";
import "../../styles/Sign.css"



export default function SignUp({profile, setProfile}){
    return (
        <div className="Sign_up_container">
            <div className="Sign_up_pong">Sign In to Pong</div>
            <Login_user  profile={profile} setProfile={setProfile}/>
            <div className="form-seperator">
                <span>or</span>
            </div>
            <div className="input_containers">
                <input placeholder="Username / Email"/>
                <input placeholder="password"/>
                {/* <input placeholder="confirm your password"/> */}
                <button className="Contunie_">Continue</button>
            </div>
            {/* <div></div> */}
        </div>
    )
}