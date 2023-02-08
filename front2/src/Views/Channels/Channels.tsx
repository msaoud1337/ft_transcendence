import { ChatAndConnections, ChatPageContainer, ChatRoute, ChatStyle, ConversationsStyle } from "./Channels.Style"
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import { Conversations } from "./Conversations/Conversations";
import { Chat } from "./Chat/Chat";
import { ConnectedUsers } from "./ConnectedUsers/ConnectedUsers";
import { useAppDispatch, useAppSelector } from "../../Hooks/Hooks";
import { setDisplayState } from "../../Store/Slices/chatSlice";
import { useEffect } from "react";

const ChatRouting = () => {
    const dispatch = useAppDispatch()
    const {displayState} = useAppSelector(state => state.chatStat)
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
                <Chat />
                <ConnectedUsers />
            </ChatAndConnections>
        </ChatStyle>
    )
}

export const Channels = () => {

    const {friends} = useAppSelector(state => state.userSlice)
    console.log(friends)
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