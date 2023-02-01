import { createSlice} from '@reduxjs/toolkit'
import type { RootState } from '../Store'
import { PayloadAction } from "@reduxjs/toolkit"
import {UserDatatypes} from "../../Types"
import { 
  SignInRequest,
  SignUpRequest,
  SignInWithKey
} from "../../Apis/LoginAPIs/loginApi"

// Define a type for the slice state
interface CounterState {
  PopUpSign: boolean,
  SignUp: boolean,
  SignInstatus: "loading" | "idle",
  SignInerror: string | null,
  SignUpStatus: "loading" | "idle",
  SignUpError: string | null,
    SignUpConfirmation : null | string,
  SignInwithKeyState: "loading" | "idle",
  SignInWitKeyError: null | string,
  UserData : null | UserDatatypes,
  isUserSigned : boolean,
}

// Define the initial state using that type
const initialState: CounterState = {
  PopUpSign: false,
  SignUp: false,
  SignInerror: null,
  SignInstatus: "idle",
  SignUpStatus: "idle",
  SignUpError: null,
    SignUpConfirmation: null,
  SignInwithKeyState: "idle",
  SignInWitKeyError: null,
  UserData : null,
  isUserSigned : false,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    SignDisplay: (state) => {
      state.PopUpSign = true
    },
    SignHide: (state) => {
      state.PopUpSign = false
    },
    SignUpTrue : (state) => {
      state.SignUp = true
    },
    SignUpFalse : (state) => {
      state.SignUp = false
    },
    logOut (state , action : PayloadAction<null>) {
        state.UserData = action.payload   
    }
  },
  extraReducers: (builder) => {

    builder.addCase(SignInRequest.pending, (state) => {
      state.SignInstatus = "loading";
      state.SignInerror = null;
    });
    builder.addCase(SignInRequest.fulfilled, 
      (state, action) => {
      if (action.payload)
        state.isUserSigned = action.payload
      state.SignInstatus = "idle";
    });
    builder.addCase(SignInRequest.rejected, 
      (state) => {
      state.SignInerror = "Sign In Request failed !"
      state.SignInstatus = "idle";
    });

    builder.addCase(SignUpRequest.pending, (state) => {
      state.SignUpStatus = "loading"
      state.SignUpError = null;
    })
    builder.addCase(SignUpRequest.fulfilled,
      (state, {payload}) => {
        if (payload)
                  state.SignUpConfirmation = payload
                state.SignUpStatus = "idle"
      })
        builder.addCase(SignUpRequest.rejected, 
            (state) => {
                state.SignUpError = "Getting userData using key failed !"
                state.SignUpStatus = "idle"
            })
    
    builder.addCase(SignInWithKey.pending, (state) => {
      state.SignInwithKeyState = "loading"
      state.SignInWitKeyError = null;
    })
    builder.addCase(SignInWithKey.fulfilled, 
      (state, {payload}) => {
        if (payload)
          state.UserData = payload
        state.SignInwithKeyState = "idle"
    })
    builder.addCase(SignInWithKey.rejected, 
      (state) => {
        state.SignInWitKeyError = "Sign Up Request failed"
        state.SignInwithKeyState = "idle"
    })

  }
})

export const { 
  SignUpTrue, 
  SignUpFalse, 
  SignHide, 
  SignDisplay,
  logOut
} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const UserStats = (state: RootState) => state.counter.PopUpSign

export default counterSlice.reducer