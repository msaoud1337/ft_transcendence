import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import React , {useState,useEffect} from "react";

export default function Login_user() {
        const [ profile, setProfile ] = useState([]);
        const clientId = "165480600397-7ok712iq2lhqb827lv68v96jpmojnpb5.apps.googleusercontent.com";
        useEffect(() => {
            const initClient = () => {
                gapi.client.init({
                    clientId: clientId,
                    scope: ''
                });
            };
            gapi.load('client:auth2', initClient);
        });
      
        const onSuccess = (res) => {
            setProfile(res.profileObj);
        };
      
        const onFailure = (err) => {
            console.log('failed', err);
        };
      
        const logOut = () => {
            setProfile(null);
        };
      
        return (
            <div className="test1">
                <h2>React Google Login</h2>
                <br />
                <br />
                {profile ? (
                    <div>
                        <img src={profile.imageUrl} alt="" />
                        <h3>User Logged in</h3>
                        <p>Name: {profile.name}</p>
                        <p>Email Address: {profile.email}</p>
                        <br />
                        <br />
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Log out"
                            onLogoutSuccess={logOut} />
                    </div>
                ) : (
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                )}
            </div>
        );
}