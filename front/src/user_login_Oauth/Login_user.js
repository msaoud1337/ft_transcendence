import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
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
                render={renderProps => (
                    <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
                )}
                ></GoogleLogin>
        </div>
    )
}

// export default function Login_user({ profile, setProfile }) {
//         console.log(profile)
//         const clientId = "165480600397-7ok712iq2lhqb827lv68v96jpmojnpb5.apps.googleusercontent.com";
//         useEffect(() => {
//             const initClient = () => {
//                 gapi.client.init({
//                     clientId: clientId,
//                     scope: ''
//                 });
//             };
//             gapi.load('client:auth2', initClient);
//         });
      
//         const onSuccess = (res) => {
//             setProfile(res.profileObj);
//             console.log(profile)
//         };
      
//         const onFailure = (err) => {
//             console.log('failed', err);
//         };
      
//         const logOut = () => {
//             setProfile(null);
//         };
      
//         return (
//             <div className='test2'>
//                 {profile ? (
//                         <GoogleLogout
//                             clientId={clientId}
//                             buttonText="Log out"
//                             onLogoutSuccess={logOut}
//                             />
//                 ) : (
//                     <GoogleLogin
//                         clientId={clientId}
//                         onSuccess={onSuccess}
//                         onFailure={onFailure}
//                         cookiePolicy={'single_host_origin'}
//                         isSignedIn={false}
                            
//                     />
//                 )}
//             </div>
//         );
// }