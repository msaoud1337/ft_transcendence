import { createSlice} from '@reduxjs/toolkit'
import type { RootState } from '../Store'
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
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(SignInRequest.pending, (state) => {
      state.SignInstatus = "loading";
      state.SignInerror = null;
    });
    builder.addCase(SignInRequest.fulfilled, 
      (state, {payload} : any) => {
      if (payload){
        console.log(payload)
        state.isUserSigned = payload
      }
      state.SignInstatus = "idle";
    });
    builder.addCase(SignInRequest.rejected, 
      (state, { payload } : any) => {
      if (payload) 
        state.SignInerror = payload.message;
      state.SignInstatus = "idle";
    });

    builder.addCase(SignUpRequest.pending, (state) => {
      state.SignUpStatus = "loading"
      state.SignUpError = null;
    })
    builder.addCase(SignUpRequest.fulfilled,
      (state, {payload} : any) => {
        if (payload)
				  state.SignUpConfirmation = payload
				state.SignUpStatus = "idle"
      })
		builder.addCase(SignUpRequest.rejected, 
			(state, {payload} : any) => {
				if (payload)
					state.SignUpError = payload.message
				state.SignUpStatus = "idle"
			})
    
    builder.addCase(SignInWithKey.pending, (state) => {
      state.SignInwithKeyState = "loading"
      state.SignInWitKeyError = null;
      console.log("Hi")
    })
    builder.addCase(SignInWithKey.fulfilled, 
      (state, {payload} : any) => {
        if (payload){
          console.log("from the payload ",payload)
          state.UserData = payload
        }
        state.SignInwithKeyState = "idle"
    })
    builder.addCase(SignInWithKey.rejected, (state, {payload} : any) => {
      if (payload)
        state.SignInWitKeyError = payload.message
      state.SignInwithKeyState = "idle"
    })
  }
})

export const { 
  SignUpTrue, 
  SignUpFalse, 
  SignHide, 
  SignDisplay,
  // incrementByAmount 
} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const UserStats = (state: RootState) => state.counter.PopUpSign

export default counterSlice.reducer