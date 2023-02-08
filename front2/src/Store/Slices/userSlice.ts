import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDatatypes } from "../../Types";
import { blockUserRequest, GetAllUsers, GetBlockedUsers, GetPendingRequest } from "../../Apis/LoginAPIs/userDetails";
import { GetFriends } from "../../Apis/LoginAPIs/userDetails";

interface UserStat {
    friendRequest : UserDatatypes[] | null,
    friends : UserDatatypes[] | null,
    allUsers : UserDatatypes[] | null,
    blockerUsers : UserDatatypes[] | null,
    blockState : "idle" | "loading",
    rmFriendState : "idle" | "loading",
}

const initialState: UserStat = {
    friendRequest : null,
    friends : null,
    allUsers : null,
    blockerUsers : null,
    blockState : "idle",
    rmFriendState : "idle",
}

export const userStat = createSlice({
    name : "userState",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(GetPendingRequest.fulfilled,
            (state, {payload}) => {
                if (payload)
                   state.friendRequest = payload
            });
        builder.addCase(GetFriends.fulfilled,
            (state, {payload}) => {
                if (payload)
                   state.friends = payload
            });
        builder.addCase(GetAllUsers.fulfilled,
            (state, {payload}) => {
                if (payload)
                   state.allUsers = payload
            });
        builder.addCase(GetBlockedUsers.fulfilled,
            (state, {payload}) => {
                if (payload)
                   state.blockerUsers = payload
            });
        builder.addCase(blockUserRequest.pending, (state) => {
            state.blockState = "loading"
        })
        builder.addCase(blockUserRequest.fulfilled, (state) => {
            state.blockState = "idle"
        })
    },

})


export default userStat.reducer