import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React , {useState , useEffect} from "react";
import GoogleButton from 'react-google-button'



export default function Login_user({setProfile}) {
    const clientid = "165480600397-7ok712iq2lhqb827lv68v96jpmojnpb5.apps.googleusercontent.com"    

    const succes = (googleData) => {
        setProfile(googleData.profileObj)
    }

    const failure = () => {
        localStorage.removeItem("login_data")
    }
    
    return (
        <div>
            <GoogleLogin
                clientId={clientid}
                buttonText="Log In with Google"
                onSuccess={succes}
                onFailure={failure}
                cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
        </div>
    )
}
