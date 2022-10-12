import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import React , {useState , useEffect} from "react";
import GoogleButton from 'react-google-button'



export default function Login_user() {

    const clientid = "165480600397-7ok712iq2lhqb827lv68v96jpmojnpb5.apps.googleusercontent.com"
    const [user, setUser] = useState(
        localStorage.getItem("logindata")
            ? JSON.parse(localStorage.getItem("logindata"))
            : null
    )
    console.log(user)
    const succes = (googleData) => {
        console.log(googleData.tokenId)
    }
    const failure = (result) => {
        alert(result)
    }

    return (
        <div className='test2'>
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
// export default function Login_user({profile, setProfile}) {
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
//         };
      
//         const onFailure = (err) => {
//             console.log('failed', err);
//         };
      
//         const logOut = () => {
//             setProfile(null);
//         };
      
//         return (
//             <div className='google_container'>
//                 <h2>React Google Login</h2>
//                 <br />
//                 <br />
//                 {profile ? (
//                     <div className='button_logout'>
//                         <GoogleLogout
//                             clientId={clientId}
//                             buttonText="Log out"
//                             onLogoutSuccess={logOut}
//                             />
//                         <img src={profile.imageUrl} alt="" />
//                         <h3>User Logged in</h3>
//                         <p>Name: {profile.name}</p>
//                         <p>Email Address: {profile.email}</p>
//                         <br />
//                         <br />
//                     </div>
//                 ) : (
//                     <GoogleLogin
//                         clientId={clientId}
//                         // buttonText="Sign in with Google"
//                         onSuccess={onSuccess}
//                         onFailure={onFailure}
//                         cookiePolicy={'single_host_origin'}
//                         isSignedIn={true}
//                         render={renderProps => (
//                             <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
//                           )}
                            
//                     />
//                 )}
//             </div>
//         );
// }