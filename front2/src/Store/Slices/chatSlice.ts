import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ChatStat {
    displayState : "users" | "group",
}

const initialState : ChatStat = {
    displayState : "users",
}

export const chatStat = createSlice({
    name : "chatSlice",
    initialState,
    reducers : {
        setDisplayState : (state, action : PayloadAction<"users" | "group">) => {
            state.displayState = action.payload
        }
    },
    extraReducers(builder) {
        
    },
})

export const {
    setDisplayState
} = chatStat.actions

export default chatStat.reducer