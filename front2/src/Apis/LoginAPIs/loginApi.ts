import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import { UserDatatypes } from "../../Types";

export const SignInRequest = createAsyncThunk(
    "SignInRequest",
    async (data: object) => {
        try {
            const User = await axios.post("http://localhost:3001/api/auth/login"
                ,data
            )
            localStorage.setItem("UserKey",User.data)
            return true
        } catch (error) {
            return 
        }
    }
)

export const SignInWithKey = createAsyncThunk(
    "SignInWithKey",
    async () => {
        try {
            const UserData = await axios.get<UserDatatypes>("http://localhost:3001/api/users/me",
            {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("UserKey")}`
                }
            })
            return UserData.data
        } catch (error) {
            return 
        }
    }
)

export const SignUpRequest = createAsyncThunk(
    "SignUpRequest",
    async (data : {user_name : string}) => {
        console.log(data)
        try {
            const User = await axios.post("http://localhost:3001/api/auth/signup"
            ,{
                "user_name" : data.user_name,
                "display_name" : data.user_name.substring(0.6),
                "email" : `${data.user_name}@1337.ma`
            }
            )
            return User.data
        } catch (error){
            return 
        }
    }
)
