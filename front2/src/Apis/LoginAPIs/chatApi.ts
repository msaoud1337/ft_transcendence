import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = {
    headers : {
        "Authorization" : `Bearer ${localStorage.getItem("UserKey")}`
    }
}

export const GetHistoryMessages = createAsyncThunk(
    "CheckUser",
    async (userId : string) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/messages/direct/${userId}`,token)
            return response.data
        } catch {

        }
    }
)

export const GetUser = createAsyncThunk(
    "checkUser",
    async (userId : string) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/users/${userId}`,token)
            return response.data
        } catch {

        }
    }
)