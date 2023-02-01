import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDatatypes } from "../../Types";
import { GetPendingRequest } from "../../Apis/LoginAPIs/userDetails";


interface UserStat {
    friendRequest : UserDatatypes[] | null,
}

const initialState: UserStat = {
    friendRequest : null,
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
            }    
        )
    },

})


export default userStat.reducer