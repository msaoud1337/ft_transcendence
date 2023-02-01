import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./Slices/counterSlice"
import userSlice from './Slices/userSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    userSlice : userSlice
  },
})

// const store = configureStore({
//   reducer: rootReducer,
// })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;