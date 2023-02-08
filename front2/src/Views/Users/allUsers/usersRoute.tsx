import { RouteContainer } from "./AllUser.Style"
import { Button } from "@mui/material"
import { NavLink, useLocation } from "react-router-dom"

export const RoutUsers = () => {
    const location = useLocation().pathname
    return (
        <RouteContainer>
            <NavLink to="/users/all_users" style={navStyle}>
                <Button 
                    variant={location === "/users/all_users" ? "contained" : "outlined"}
                    sx={style}
                    >
                    Users
                </Button>
            </NavLink>
            <NavLink to="/users/friends" style={navStyle}>
                <Button 
                    variant={location === "/users/friends" ? "contained" : "outlined"}
                    sx={style}
                    >
                    friends
                </Button>
            </NavLink>
            <NavLink to="/users/blocked_users" style={navStyle}>
                <Button 
                    variant={location === "/users/blocked_users" ? "contained" : "outlined"}
                    sx={style}
                >
                    blocked
                </Button>
            </NavLink>
        </RouteContainer>
    )
}

const style = {
    height : "4rem",
    width : "100%",
}

const navStyle = {
    textDecoration : "none"
}
