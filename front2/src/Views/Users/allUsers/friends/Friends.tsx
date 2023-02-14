import { useAppDispatch, useAppSelector } from "../../../../Hooks/Hooks"
import { AllUsersContainer, CartStyle, UserName, UsersContainer } from "../AllUser.Style"
import { CardAvatar } from "../usersAvatar/UsersAvatar"
import { RoutUsers } from "../usersRoute"
import Button from "@mui/material/Button"
import { UserDatatypes } from "../../../../Types"
import { blockUserRequest, GetFriends, unFriend } from "../../../../Apis/LoginAPIs/userDetails"

const CardFriends = ({user} : {user : UserDatatypes}) => {
    const dispatch = useAppDispatch()
    const removeFriend = () => {
        dispatch(unFriend(user.id))  
        setTimeout( () => {
            dispatch(GetFriends())
        },100)
    }

    const blockUser = () => {
        dispatch(blockUserRequest(user.id))
        setTimeout( () => {
            dispatch(GetFriends())
        },100)
    }

    return (
        <CartStyle>
            <CardAvatar avatar={user.avatar_url} state={user.state}/>
            <UserName>{user.display_name}</UserName>
            <Button
                variant="contained" 
                sx={buttonStyle}
                onClick={removeFriend}
            >
                remove
            </Button>
            <Button
                variant="outlined" 
                sx={buttonStyle}
                onClick={blockUser}
            >
                block
            </Button>
        </CartStyle>
    )
}

const Friends = () => {
    const {friends} = useAppSelector(state => state.userSlice)
    return (
        <UsersContainer>
            {friends?.map( user => {
                return <CardFriends key={user.id} user={user}/>
            })}
        </UsersContainer>
    )
}

export const  FriendsPage = () => {
    return (
        <>
            <RoutUsers />
            <Friends />
        </>
    )
}

const buttonStyle = {
    height : "3rem",
    width : "100%",
}