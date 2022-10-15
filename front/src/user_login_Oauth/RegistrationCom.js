import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark,faSquare,faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import {FcGoogle} from "react-icons/fc"
import Login_user from "./Login_user"

export default function RegistrationCom({ onClose,stayLogin, click, profile, setProfile }) { 
    console.log(profile)
    return (
        <div className="modil" onClick={e => e.stopPropagation()}>
            <div className="modil_close">
                <div className="icone_modal"></div>
                <FontAwesomeIcon
                    icon={faXmark}
                    onClick={onClose}
                    className="Log_modal"
                />
            </div>    
            <h1 className="Login_in_title">Log In</h1>
            <div className="user_information">
                <div className="Email_Address">
                    <div>Email address</div>
                    <input type="text" className="inputs"/>
                </div>
                <div className="Email_Address">
                    <div>Password</div>
                    <input type="text" className="inputs"/>
                </div>
                <div className="Forgot_password_bar">
                    <div className="icone_div">
                        {stayLogin
                            ? <FontAwesomeIcon icon={faSquareCheck} onClick={click} />
                            : <FontAwesomeIcon icon={faSquare} onClick={click}/>}
                        <div onClick={click} style={{cursor: "Pointer"}}>Remembre me</div>
                    </div>
                    <div className="Forgot_password">Forgot password?</div>
                </div>
                <button className="Login_button_modal">Log in</button>
                <div className="Sign_up"> <p>Dont have an account ? </p><p className="Sign_up_1">Sign up</p></div>
                <div>or</div>
                <Login_user profile={profile} setProfile={setProfile} />
            </div>
        </div>
    )
}