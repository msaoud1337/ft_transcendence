import Login_user from "../Login_user";
import "../../styles/Sign.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SignUp({profile, setProfile}){
    return (
        <div className="Sign_up_container">
            <div className="Sign_up_pong">Sign In to <br/>Pong</div> 
            <div className="Login_user_container">
                <Login_user  profile={profile} setProfile={setProfile}/>
            </div>
             <div className="form-seperator">
                <span>or</span>
            </div>
            <div className="input_containers">
                <input placeholder="Username / Email"/>
                <input placeholder="password"/>
                <div className="Contunie_container">
                    <button className="Contunie_">Continue</button>
                    {/* <FontAwesomeIcon icon={solid("fa-square-check")} /> */}
                </div> 
            </div>
            <hr className="line"></hr>

        </div>
    )
}