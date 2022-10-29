import Login_user from "../Login_user";
import axios from "axios"


export default function SignUp({profile, setProfile, sign}) {

    const signUpValue = {
        name : "",
        password : "",
        confirmPassword : "",
    }

    const userName = (e) => {
        signUpValue.name = e.target.value
    }

    const password = (e) => {
        signUpValue.password = e.target.value
    }

    const confirmPassword = (e) => {
        signUpValue.confirmPassword = e.target.value
    }

    const confirmData = () => {
        const data = {
            "user_name": "amine",
            "display_name": "samine",
            "email": "samine@1337.com",
        }

        console.log(data)
        axios.get("http://localhost:3001/api/users/me", {
            headers : {
                "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsInVzZXJfbmFtZSI6ImFtaW5lIiwiZW1haWwiOiJzYW1pbmVAMTMzNy5jb20iLCJpYXQiOjE2NjY0ODMwODgsImV4cCI6MTY2OTA3NTA4OH0.YnzqK53WhlztTUp7poyuWjWbItGu0g9-lHLfKl_NhXw`
            }
        })
        .then(response => {
            console.log(response)
            setProfile(response.data)
            console.log("data changed in the profile")
            localStorage.setItem("login_data", JSON.stringify(response.data))
        })
    }

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
                <input placeholder="Username / Email" onChange={userName}/>
                <input type="password" placeholder="password" onChange={password}/>
                <input type="password" placeholder="Confirm your password" onChange={confirmPassword}/>
                <div className="Contunie_container">
                    <button className="Contunie_" onClick={confirmData}>Continue</button>
                </div>
                <div className="Join">Already membre ?<span onClick={sign}>Sign in</span></div>
            </div>
        </div>
    )
}