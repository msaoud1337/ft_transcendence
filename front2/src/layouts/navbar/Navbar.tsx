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
import { NavLink } from "react-router-dom";
import Avatar from "./avatar/navAvatar"
import Notification from "./notification/Notification";

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
            <RouteElement>Channels</RouteElement>
            <RouteElement>Game</RouteElement>
            <NavLink to="/users" style={routeStyle}>
                <RouteElement>Users</RouteElement>
            </NavLink>
            <RouteElement>About</RouteElement>
        </StyledRoute>
    )
}

export default function Navbar({users} : {users : "true" | "false"}) {
    const { UserData } = useAppSelector(state => state.counter)
    return (
        <>
        <NavbarStyle className={users === "true" ? "Navbar_Without_User" : ""}>
            <LogoStyle src={Logo} />
            {UserData ? <Routes /> : <></>}
            {UserData ? <NavbarRightSide /> : <></>}
        </NavbarStyle>
        </>
    )
}

const routeStyle = {
    textDecoration : "none",
}