import { createSlice} from '@reduxjs/toolkit'
import type { RootState } from '../Store'
import {UserDatatypes} from "../../Types"
import { SignInRequest } from "../../Apis/LoginAPIs/loginApi"
import { SignUpRequest } from '../../Apis/LoginAPIs/loginApi'

// Define a type for the slice state
interface CounterState {
  PopUpSign: boolean,
  SignUp: boolean,
  SignInstatus: "loading" | "idle",
  SignInerror: string | null,
  list: UserDatatypes[],
  UserData: null | object,
  SignUpStatus: "loading" | "idle",
  SignUpError: string | null,
	SignUpConfirmation : null | string
}

// Define the initial state using that type
const initialState: CounterState = {
  PopUpSign: false,
  SignUp: false,
  list: [],
  SignInerror: null,
  SignInstatus: "idle",
  UserData: null,
  SignUpStatus: "idle",
  SignUpError: null,
	SignUpConfirmation: null,
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
		SetSignUpconfirmation : (state) => {
			state.SignUpConfirmation = null
		}
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
      (state, { payload } : any) => {
      // state.list.push(...payload);
      state.UserData = payload;
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
				state.SignUpStatus = "idle"
				state.SignUpConfirmation = payload
      })
		builder.addCase(SignUpRequest.rejected, 
			(state, {payload} : any) => {
				if (payload)
					state.SignUpError = payload.message
				state.SignUpStatus = "idle"
			})

  }
})

export const { 
  SignUpTrue, 
  SignUpFalse, 
  SignHide, 
  SignDisplay,
	SetSignUpconfirmation,
  // incrementByAmount 
} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const UserStats = (state: RootState) => state.counter.PopUpSign

export default counterSlice.reducer