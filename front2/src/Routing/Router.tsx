import React from "react"
import Users from "../Views/Users/Users"
import Home from "../Views/Home/Home"
import { 
    Route,
    createBrowserRouter, 
    createRoutesFromElements,
    Outlet
} from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../Hooks/Hooks"
import { UsersPage } from "../Views/Users/allUsers/allUsers/AllUsers"
import Navbar from "../layouts/navbar/Navbar"
import { FriendsPage } from "../Views/Users/allUsers/friends/Friends"
import { BlockedPage } from "../Views/Users/allUsers/blocked/Blocked"
import { Channels } from "../Views/Channels/Channels"
import { AllUsersParent } from "../Views/Users/allUsers/usersRoute"
import { Chat } from "../Views/Channels/Chat/Chat"
import { GetHistoryMessages } from "../Apis/LoginAPIs/chatApi"
import axios from "axios"

const ProtectedRoute = () => {
    const { UserData } = useAppSelector(state => state.counter)
    if (!UserData)
        return (
            <>
                <Home />
            </>
        )
    else
        return(
            <Outlet />
        )
}


export  const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Navbar />}>
            <Route index element={<Home />}/> 
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />}/>
                <Route path="chat" element={<Channels />}>
                    <Route 
                        path=":chatId" 
                        element={<Chat />}
                    />
                </Route>
                <Route path="users" element={<Users />} />
                <Route element={<AllUsersParent />}>
                    <Route path="all_users" element={<UsersPage />}/>
                    <Route path="friends" element={<FriendsPage />}/>
                    <Route path="blocked_users" element={<BlockedPage />}/>
                </Route>
            </Route>
            <Route path="*" element={<h1>Oops Something wrong</h1>}/>
        </Route>
    )
)