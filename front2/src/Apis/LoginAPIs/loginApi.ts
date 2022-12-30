import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import { Console } from "console";
import { UserDatatypes } from "../../Types";

export const SignInRequest = createAsyncThunk(
    "SignInRequest",
    async (data: object, thunkApi : any) => {
        try {
            const User = await axios.post("http://localhost:3001/api/auth/login"
                ,data
            )
            const UserData = await axios.get<UserDatatypes>("http://localhost:3001/api/users/me",
            {
                headers : {
                    "Authorization" : `Bearer ${User.data}`
                }
            })
            console.log(UserData.data)
            return UserData.data
        } catch (error: string | unknown){
            return thunkApi.rejectWithValue({
                message : "Sign In Request failed"
            })
        }
    }
)

export const SignUpRequest = createAsyncThunk(
    "SignUpRequest",
    async (data : {user_name : string}, thunkApi : any) => {
        console.log(data)
        try {
            const User = await axios.post("http://localhost:3001/api/auth/signup"
            ,{
                "user_name" : data.user_name,
                "display_name" : data.user_name.substring(0.6),
                "email" : `${data.user_name}@1337.ma`
            }
            )
            console.log(User)
            return User.data
        } catch (error : string | unknown){
            return thunkApi.rejectWithValue({
                message : "Sign Up Request failed"
            })
        }
    }
)
