import React from "react";
import {
    NavbarStyle, 
    LogoStyle,
    StyledRoute,
    RouteElement,
    UserName,
    NavbarRightSideContainer,
    UserAvatar
} from "./Navbar.style";
import Avatar from "../../assets/svg/profile.svg"
import Logo from "../../assets/svg/Logo.svg"

const NavbarRightSide = () => {
    return (
        <NavbarRightSideContainer>
            <div></div>
            <UserName>user_name</UserName>
            <UserAvatar src={Avatar}/>
        </NavbarRightSideContainer>      

    )
}

const Route = () => {
    return (
        <StyledRoute>
            <RouteElement>Home</RouteElement>
            <RouteElement>Channels</RouteElement>
            <RouteElement>Game</RouteElement>
            <RouteElement>Users</RouteElement>
            <RouteElement>About</RouteElement>
        </StyledRoute>
    )
}


export default function Navbar() {
    return (
        <NavbarStyle>
            <LogoStyle src={Logo} />
            <Route />
            <NavbarRightSide />
        </NavbarStyle>
    )
}