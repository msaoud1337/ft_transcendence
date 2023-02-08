import { AllUsersContainer, CartStyle, RouteContainer, UserName, UsersContainer } from "../AllUser.Style"
import { Button } from "@mui/material"
import { useAppSelector, useAppDispatch } from "../../../../Hooks/Hooks"
import { useEffect, useState } from "react"
import { blockUserRequest, GetAllUsers, GetBlockedUsers, GetFriends } from "../../../../Apis/LoginAPIs/userDetails"
import { UserDatatypes } from "../../../../Types"
import { CardAvatar } from "../usersAvatar/UsersAvatar"
import { RoutUsers } from "../usersRoute"
import { SendFriendRequest } from "../../../../Apis/LoginAPIs/userDetails"
import { socket } from "../../../../Events/SocketProvider"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from "axios"

export const CardAllUsers = ({user} : {user : UserDatatypes}) => {
    const [blockState, setBlockState] = useState<"loading" | "idle">("idle")
    const dispatch = useAppDispatch()
    const {friends, blockerUsers} = useAppSelector(state => state.userSlice)
    const {UserData} = useAppSelector(state => state.counter)

    const isFriend = friends?.find(fr => {return (fr.id === user.id)})
    const isBlocked = blockerUsers?.find(bl => {return (bl.id === user.id)})
    if (isFriend || isBlocked || !user.display_name || UserData?.id === user.id)
        return <></>

    const sendRequest = () => {
        dispatch(SendFriendRequest(user.id))
        socket.emit("send_notification",{userId : user.id})
    }

    const blockUser = () => {
        setBlockState("loading")
        axios.patch("http://localhost:3001/api/users/friend-block/",{
            blockId : user.id
        }   ,token
        )
        .then(() => {
            setBlockState("idle")
            dispatch(GetBlockedUsers())
        })
    }
    
    return (
        <CartStyle>
            <CardAvatar avatar={user.avatar_url} state={user.state}/>
            <UserName>{user.display_name}</UserName>
            <Button 
                variant="contained" 
                sx={buttonStyle}
                onClick={sendRequest}
            >
                add friend
            </Button>
            <Button 
                variant="outlined" 
                sx={buttonStyle}
                onClick={blockUser}
            >
            {   blockState === "loading" 
                ?   <Box sx={{ display: 'flex' }}>
                        <CircularProgress size={20}/>
                    </Box>
                :   "block"
            }
            </Button>
        </CartStyle>
    )
}

export const Users = () => {
    const dispatch = useAppDispatch()
    const {allUsers, blockerUsers} = useAppSelector(state => state.userSlice)
    
    useEffect( () => {
        dispatch(GetAllUsers())
        dispatch(GetFriends())
        dispatch(GetBlockedUsers())
    },[socket] )

    return (
        <UsersContainer>
            {allUsers && allUsers.map( user => {
                return <CardAllUsers user={user} key={user.id}/>
            })}
        </UsersContainer>
    )
}

export const UsersPage = () => {
    return (
        <AllUsersContainer>
            <RoutUsers />
            <Users />
        </AllUsersContainer>
    )
}

const buttonStyle = {
    height : "3rem",
    width : "100%",
}

const token = {
    headers : {
        "Authorization" : `Bearer ${localStorage.getItem("UserKey")}`
    }
}