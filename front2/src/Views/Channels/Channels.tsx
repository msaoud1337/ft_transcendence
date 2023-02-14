import { ChatAndConnections, ChatPageContainer, ChatRoute, ChatStyle, ConversationsStyle } from "./Channels.Style"
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import { Conversations } from "./Conversations/Conversations";
import { Chat } from "./Chat/Chat";
import { ConnectedUsers } from "./ConnectedUsers/ConnectedUsers";
import { useAppDispatch, useAppSelector } from "../../Hooks/Hooks";
import { ChatType, setDisplayState } from "../../Store/Slices/chatSlice";
import { useEffect } from "react";
import { GetFriends } from "../../Apis/LoginAPIs/userDetails";
import { Outlet } from "react-router-dom";
import { socket } from "../../Events/SocketProvider";

const ChatRouting = () => {
    const dispatch = useAppDispatch()
    const {displayState} = useAppSelector(state => state.chatSlice)
    const setGroup = () => dispatch(setDisplayState("group"))
    const setUsers = () => dispatch(setDisplayState("users"))

    return (
        <ChatRoute>
            {   displayState === "users"
                ? <GroupIcon onClick={setGroup} fontSize="large" style={iconStyle}/>
                : <GroupsIcon onClick={setUsers} fontSize="large" style={iconStyle}/>
                }
        </ChatRoute>
    )
}

const ChatContainer = () => {
    return (
        <ChatStyle>
            <ChatRouting />
            <ChatAndConnections>
                <Outlet />
                <ConnectedUsers />
            </ChatAndConnections>
        </ChatStyle>
    )
}

export const Channels = () => {

    const {friends} = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()


    useEffect( () => {
        dispatch(GetFriends())
    },[])

    return (
        <ChatPageContainer>
            <Conversations />
            <ChatContainer />
        </ChatPageContainer>
    )
}


const iconStyle = {
    height : "4rem", 
    width : "4rem", 
    color : "#C4C4C4",
}