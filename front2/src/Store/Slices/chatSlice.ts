import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetHistoryMessages } from "../../Apis/LoginAPIs/chatApi";
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
    selectedConversationId : number,
    directMessages : ChatType[] | null,
}

const initialState : ChatStat = {
    displayState : "users",
    selectedConversationId : 0,
    directMessages : null,
}

export const chatStat = createSlice({
    name : "chatSlice",
    initialState,
    reducers : {
        setDisplayState : (state, action : PayloadAction<"users" | "group">) => {
            state.displayState = action.payload
        },
        setSelectedConversation : (state, action : PayloadAction<number>) => {
            state.selectedConversationId = action.payload
        },
        setDirectMessage : (state, action : PayloadAction<ChatType[]>) => {
            state.directMessages = action.payload
        },
        setNewMessage : (state, action : PayloadAction<ChatType>) => {
            state.directMessages?.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder.addCase(GetHistoryMessages.fulfilled, (state, action) => {
            state.directMessages = action.payload
        })
    },
})

export const {
    setDisplayState,
    setSelectedConversation,
    setDirectMessage,
    setNewMessage,
} = chatStat.actions

export default chatStat.reducer