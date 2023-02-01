import React from "react"
import Users from "../Views/Users/Users"
import Home from "../Views/Home/Home"
import { 
    Route,
    createBrowserRouter, 
    createRoutesFromElements,
    Outlet
} from "react-router-dom"
import { useAppSelector } from "../Hooks/Hooks"

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
        <Route>
            <Route index element={<Home />}/>
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />}/>
                <Route path="users" element={<Users />}/>
            </Route>
            <Route path="*" element={<h1>Oops Something wrong</h1>}/>
        </Route>
    )
)