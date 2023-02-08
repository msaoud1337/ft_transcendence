import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserDatatypes } from "../../Types";
import { ImageType } from "react-images-uploading"

const token = {
    headers : {
        "Authorization" : `Bearer ${localStorage.getItem("UserKey")}`
    }
}

export const GetFriends = createAsyncThunk(
    "friends",
    async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/users/friends",
                token
            )
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const GetAllUsers = createAsyncThunk(
    "allUsers",
    async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/users/all_users")
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const GetBlockedUsers = createAsyncThunk(
    "blockerUsers",
    async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/users/blocked-friends/",
            token    
        )
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)


export const GetPendingRequest = createAsyncThunk(
    "pending-request",
   async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/users/pending-friends/", 
                    token
                )
                return response.data
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
            const response = await axios.patch("http://localhost:3001/api/users/friend-accept/",{
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
    async (formData : FormData) => {
        console.log(formData)
        try {
            const response  = await axios.patch("http://localhost:3001/api/users/update-profile", 
                formData
            ,   token
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

export const SendFriendRequest = createAsyncThunk(
    "friendRequest",
    async (id : number) => {
        try {
            const response  = await axios.patch("http://localhost:3001/api/users/friend-request/", {
                recipientId : id,
            },  token
        )
            console.log(response)
        } catch (error) {
            console.log(error)
        }      
    }
)

export const blockUserRequest = createAsyncThunk(
    "blockUser",
    async (id : number) => {
        try {
            const response  = await axios.patch("http://localhost:3001/api/users/friend-block/", {
                blockId : id,
            },  token
        )
            console.log(response)
        } catch (error) {
            console.log(error)
        }      
    }
)

export const unblockUser = createAsyncThunk(
    "unblockUser",
    async (id : number) => {
        try {
            const response  = await axios.patch("http://localhost:3001/api/users/friend-unblock/", {
                unblockId : id,
            },  token
        )
            console.log(response)
        } catch (error) {
            console.log(error)
        }      
    }
)

export const unFriend = createAsyncThunk(
    "unFriend",
    async (id : number) => {
        try {
            const response  = await axios.patch("http://localhost:3001/api/users/remove-relation", {
                rejectedId : id,
            },  token
        )
            console.log(response)
        } catch (error) {
            console.log(error)
        }      
    }
)

