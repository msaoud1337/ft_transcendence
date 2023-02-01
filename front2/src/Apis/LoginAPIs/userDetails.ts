import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserDatatypes } from "../../Types";
import { ImageType } from "react-images-uploading"

const token = {
    headers : {
        "Authorization" : `Bearer ${localStorage.getItem("UserKey")}`
    }
}

export const GetPendingRequest = createAsyncThunk(
    "pending-request",
   async () => {
        try {
            const pendings = await axios.get("http://localhost:3001/api/users/pending-friends/", 
                    token
                )
                return pendings.data
        } catch (error) {
            return 
        }
    }
    )
    
export const CancelFriendRequest = createAsyncThunk(
    "cancel-request",
    async (id : number) => {
        try {
            await axios.patch("http://localhost:3001/api/users/remove-relation",{
                    rejectedId : id,
                },  token
            )
            return 
        } catch (error) {
            return 
        }
    }
)

export const AccepteFriendRequest = createAsyncThunk(
    "accepte-request",
    async (id : number) => {
        try {
            const response = await axios.patch("http://localhost:3001/api/users/friend-accepte/",{
                    applicantId : id
                },  token    
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
)

export const EditProfileUserName = createAsyncThunk(
    "edit-profile",
    async (userName : ImageType) => {
        try {
            const response  = await axios.patch("http://localhost:3001/api/users/update-profile", {
                "file" : userName
            },  token
        )
            console.log(response)
        } catch (error) {
            console.log(error)
        }      
    }
)

export const EditProfileAvatar = createAsyncThunk(
    "edit-profile-avatar",
    async (userName : string) => {
        try {
            const response  = await axios.patch("http://localhost:3001/api/users/update-profile", {
                user_name : userName
            },  token
        )
            console.log(response)
        } catch (error) {
            console.log(error)
        }      
    }
)

