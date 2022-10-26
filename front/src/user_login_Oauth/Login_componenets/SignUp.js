import Login_user from "../Login_user";

export default function SignUp({profile, setProfile, sign}) {
    return (
        <div className="Sign_up_container">
            <div className="Sign_up_pong">Sign Up to Pong</div>
            <div className="Login_user_container">
                <Login_user  profile={profile} setProfile={setProfile}/>
            </div>
             <div className="form-seperator">
                <span>or</span>
            </div>
            <div className="input_containers">
                <input placeholder="Username / Email"/>
                <input placeholder="password"/>
                <input placeholder="Confirm your password"/>
                <div className="Contunie_container">
                    <button className="Contunie_">Continue</button>
                </div>
                <div className="Join">Already membre ?<span onClick={sign}>Sign in</span></div>
            </div>
        </div>
    )
}