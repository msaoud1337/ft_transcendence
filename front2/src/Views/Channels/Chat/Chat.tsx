import { ChatContainer, FormInputStyle, Input, MessagesContainer, MessageReceivedStyle, TextTimeContainer, Time, ChatContent, ChatContentReverse, TimeReverse } from "./Chat.Style"
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch, useAppSelector } from "../../../Hooks/Hooks";
import { useEffect, useState, useRef } from "react";
import { socket } from "../../../Events/SocketProvider";
import { Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import { ChatType } from "../../../Store/Slices/chatSlice";
import { GetHistoryMessages, GetUser } from "../../../Apis/LoginAPIs/chatApi";
import { setMessage } from "../../../Store/Slices/chatSlice";


const FormInput = () => {
    const [inputValue , setInputValue] = useState<string>("")
    const {UserData} = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()
    const {receiver} = useAppSelector(state => state.chatSlice)
    const {chatId} = useParams()

    const SendMessage = () => {
        socket.emit( "send_message" , {
            receiverId : Number(chatId),
            content : inputValue,
        })
    
        const NewMessages : ChatType = {
            content : inputValue,
            createdAt : new Date().toString().slice(5),
            id : new Date().getTime(),
            sender : UserData,
            receiver : receiver,
        }
        dispatch(setMessage(NewMessages))
        setInputValue("")
    }

    const handleSubmite = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        SendMessage()
    }
    
    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    
    const handleClick = () => {
        SendMessage()
    }

    return (
        <FormInputStyle onSubmit={handleSubmite}>
                <Input  onChange={handleInputChange} value={inputValue}/>
                <SendIcon onClick={handleClick} style={{width : "4rem",height : "70%", color : "#C4C4C4"}}/>
        </FormInputStyle>
    )
}

export const Received = ({msg} : {msg : ChatType}) => {
    const {sender, content, createdAt} = msg
    return (
        <MessageReceivedStyle>
            <Avatar sx={{margin : "1rem", height : "6rem", width : "6rem"}} src={sender?.avatar_url}/>
            <TextTimeContainer>
                <ChatContent>{content}</ChatContent>
                <Time>{createdAt.substring(11,16)}</Time>
            </TextTimeContainer>
        </MessageReceivedStyle>
    )
}

export const Sent = ({msg} : {msg : ChatType}) => {
    const {sender, content, createdAt} = msg
    return (
        <MessageReceivedStyle>
            <TextTimeContainer>
                <ChatContentReverse>{content}</ChatContentReverse>
                <TimeReverse>{createdAt.substring(11,16)}</TimeReverse>
            </TextTimeContainer>
            <Avatar sx={{margin : "1rem", height : "6rem", width : "6rem"}} src={sender?.avatar_url}/>
        </MessageReceivedStyle>
    )
}

export const Messages = ({directMessages} : {directMessages : ChatType[]}) => {
    const {UserData} = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()
    const {chatId} = useParams()

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect( () => {
        socket.on("receive_message", () => {
            if (chatId)
                dispatch(GetHistoryMessages(chatId))
            })
    },[socket])

    useEffect( () => {
        scrollToBottom()
    },[directMessages])
    
    return (
        <MessagesContainer>
            { directMessages?.map( (msg) => {
                if (msg.sender)
                    if (msg.content && msg.sender?.id !== UserData?.id)
                        return <Received key={msg.id} msg={msg}/>
                    else
                        return <Sent key={msg.id} msg={msg}/>
            })}
            <div ref={messagesEndRef}/>
        </MessagesContainer>
    )
}

export const Chat = () => {
    const {directMessages} = useAppSelector(state => state.chatSlice)
    const dispatch = useAppDispatch()
    const {chatId} = useParams()

    useEffect( () => {
        if (chatId)
            dispatch(GetUser(chatId))
            .then(() => {
                dispatch(GetHistoryMessages(chatId))
            })
    },[chatId])

    return (
        <ChatContainer>
            {directMessages && <FormInput />}
            {directMessages && <Messages directMessages={directMessages}  />}
        </ChatContainer>
    )
}
