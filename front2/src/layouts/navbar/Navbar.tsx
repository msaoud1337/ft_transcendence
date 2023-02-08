import React from "react";
import {
    NavbarStyle, 
    LogoStyle,
    StyledRoute,
    RouteElement,
    UserName,
    NavbarRightSideContainer,
} from "./Navbar.style";
import Logo from "../../assets/svg/Logo.svg"
import {useAppSelector } from "../../Hooks/Hooks";
import { NavLink, Outlet } from "react-router-dom";
import Avatar from "./avatar/navAvatar"
import Notification from "./notification/Notification";
import { useLocation } from "react-router-dom";

const NavbarRightSide = () => {
    const { UserData } = useAppSelector(state => state.counter)
    return (
        <NavbarRightSideContainer>
            <Notification />
            <UserName>{UserData?.user_name}</UserName>
            <Avatar image={UserData?.avatar_url}/>
        </NavbarRightSideContainer>

    )
}

const Routes = () => {
    return (
        <StyledRoute>
            <NavLink to="/" style={routeStyle}>
                <RouteElement>Home</RouteElement>
            </NavLink>
            <NavLink to="/chat" style={routeStyle}>
                <RouteElement>Channels</RouteElement>
            </NavLink>
            <RouteElement>Game</RouteElement>
            <NavLink to="/users" style={routeStyle}>
                <RouteElement>Users</RouteElement>
            </NavLink>
            <RouteElement>About</RouteElement>
        </StyledRoute>
    )
}

export default function Navbar() {
    const { UserData } = useAppSelector(state => state.counter)
    const location = useLocation().pathname
    console.log(location)
    return (
        <>
            <NavbarStyle className="Navbar_Without_User">
                <LogoStyle src={Logo} />
                {UserData ? <Routes /> : <></>}
                {UserData ? <NavbarRightSide /> : <></>}
            </NavbarStyle>

            <main>
                <Outlet />
            </main>
        </>
    )
}

const routeStyle = {
    textDecoration : "none",
}