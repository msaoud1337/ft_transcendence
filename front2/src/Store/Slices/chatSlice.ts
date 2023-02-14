import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetHistoryMessages, GetUser } from "../../Apis/LoginAPIs/chatApi";
import { UserDatatypes } from "../../Types";

export interface ChatType {
    content : string,
    createdAt : string,
    id : number,
    receiver : UserDatatypes | null,
    sender : UserDatatypes | null,
}

interface ChatStat {
    displayState : "users" | "group",
    directMessages : ChatType[] | null,
    receiver : UserDatatypes | null,
}

const initialState : ChatStat = {
    displayState : "users",
    directMessages : null,
    receiver : null,
}

export const chatStat = createSlice({
    name : "chatSlice",
    initialState,
    reducers : {
        setDisplayState : (state, action : PayloadAction<"users" | "group">) => {
            state.displayState = action.payload
        },
        setDirectMessage : (state, action : PayloadAction<ChatType[]>) => {
            state.directMessages = action.payload
        },
        setMessage : (state, action : PayloadAction<ChatType>) => {
            if (action.payload)
                state.directMessages?.push(action.payload)
        },
    },
    extraReducers(builder) {
        builder.addCase(GetHistoryMessages.fulfilled, (state, action) => {
            state.directMessages = action.payload
        })
        builder.addCase(GetUser.fulfilled, (state, action) => {
            state.receiver = action.payload
        })
    },
})

export const {
    setDisplayState,
    setDirectMessage,
    setMessage,
} = chatStat.actions

export default chatStat.reducer