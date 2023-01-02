import React, { useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "../../Hooks/Hooks";
import { SignInWithKey } from "../../Apis/LoginAPIs/loginApi";

const NavbarRightSide = () => {
    const dispatch = useAppDispatch()
    const UserData = useAppSelector(state => state.counter.UserData)

    return (
        <NavbarRightSideContainer>
            <div></div>
            <UserName>{UserData?.user_name}</UserName>
            <UserAvatar src={UserData?.avatar_url}/>
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
    const dispatch = useAppDispatch()
    const UserData = useAppSelector(state => state.counter.UserData)
	const isUserSigned = useAppSelector(state => state.counter.isUserSigned)
    
    useEffect( () => {
        if (isUserSigned)
            dispatch(SignInWithKey(null))
    },[isUserSigned])

    console.log(UserData)

    return (
        <NavbarStyle>
            <LogoStyle src={Logo} />
            {UserData ? <Route /> : <></>}
            {UserData ? <NavbarRightSide /> : <></>}
        </NavbarStyle>
    )
}