import { AllUsersContainer, RouteContainer } from "./AllUser.Style"
import { Button } from "@mui/material"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { GetAllUsers, GetBlockedUsers, GetFriends } from "../../../Apis/LoginAPIs/userDetails"
import { useAppDispatch } from "../../../Hooks/Hooks"
import { useEffect } from "react"

export const RoutUsers = () => {
    const location = useLocation().pathname
    console.log(location)
    return (
        <RouteContainer>
            <NavLink to="/all_users" style={navStyle}>
                <Button 
                    variant={location === "/all_users" ? "contained" : "outlined"}
                    sx={style}
                    >
                    Users
                </Button>
            </NavLink>
            <NavLink to="/friends" style={navStyle}>
                <Button 
                    variant={location === "/friends" ? "contained" : "outlined"}
                    sx={style}
                    >
                    friends
                </Button>
            </NavLink>
            <NavLink to="/blocked_users" style={navStyle}>
                <Button 
                    variant={location === "/blocked_users" ? "contained" : "outlined"}
                    sx={style}
                >
                    blocked
                </Button>
            </NavLink>
        </RouteContainer>
    )
}


export const AllUsersParent = () => {
    const location = useLocation().pathname
    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(GetAllUsers())
        dispatch(GetFriends())
        dispatch(GetBlockedUsers())
    },[location] )

    return (
        <AllUsersContainer>
            <Outlet />
        </AllUsersContainer>
    )
}

const style = {
    height : "4rem",
    width : "100%",
}

const navStyle = {
    textDecoration : "none"
}
