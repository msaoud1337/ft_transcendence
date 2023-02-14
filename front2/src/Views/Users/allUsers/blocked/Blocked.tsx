import { useAppDispatch, useAppSelector } from "../../../../Hooks/Hooks"
import { AllUsersContainer, CartStyle, UserName, UsersContainer } from "../AllUser.Style"
import { CardAvatar } from "../usersAvatar/UsersAvatar"
import { RoutUsers } from "../usersRoute"
import Button from "@mui/material/Button"
import { UserDatatypes } from "../../../../Types"
import { useEffect } from "react"
import { GetBlockedUsers, unblockUser, unFriend } from "../../../../Apis/LoginAPIs/userDetails"

const CardFriends = ({user} : {user : UserDatatypes}) => {
    const dispatch = useAppDispatch()
    const unBlock = () => {
        dispatch(unblockUser(user.id))
        dispatch(unFriend(user.id))
        setTimeout( () => {
            console.log("test2")
            dispatch(GetBlockedUsers())
        },100)
    }

    return (
        <CartStyle>
            <CardAvatar avatar={user.avatar_url} state={user.state}/>
            <UserName>{user.display_name}</UserName>
            <Button 
                variant="contained" 
                sx={buttonStyle}
                onClick={unBlock}
            >
                Unblock
            </Button>
        </CartStyle>
    )
}

const Blocked = () => {
    const {blockerUsers} = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    
    useEffect( () => {
        dispatch(GetBlockedUsers())
    },[blockerUsers?.length])

    return (
        <UsersContainer>
            {blockerUsers?.map( user => {
                return <CardFriends key={user.id} user={user}/>
            })}
        </UsersContainer>
    )
}

export const  BlockedPage = () => {
    return (
        <>
            <RoutUsers />
            <Blocked />
        </>
    )
}

const buttonStyle = {
    height : "3rem",
    width : "100%",
}