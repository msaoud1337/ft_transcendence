import { ChatContainer, FormInputStyle, Input, MessagesContainer, MessageReceivedStyle, TextTimeContainer, Time, ChatContent, ChatContentReverse, TimeReverse } from "./Chat.Style"
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch, useAppSelector } from "../../../Hooks/Hooks";
import { useEffect, useState } from "react";
import { GetHistoryMessages } from "../../../Apis/LoginAPIs/chatApi";
import { socket } from "../../../Events/SocketProvider";
import { Avatar } from "@mui/material";
import { redirect, useLoaderData, useParams } from "react-router-dom";
import { ChatType } from "../../../Store/Slices/chatSlice";
import { current } from "@reduxjs/toolkit";


const FormInput = ({directMessages, setMessages} : {directMessages : ChatType[], setMessages : React.Dispatch<React.SetStateAction<ChatType[]>>}) => {
    const [inputValue , setInputValue] = useState<string>("")
    const { selectedConversationId } = useAppSelector(state => state.chatSlice)
    const {UserData} = useAppSelector(state => state.counter)
    const {chatId} = useParams()

    const handleSubmite = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValue, Number(chatId))

        socket.emit( "send_message" , {
            receiverId : Number(chatId),
            content : inputValue,
        })
        
        const NewMessages : ChatType = {
            content : inputValue,
            createdAt : new Date().toString(),
            id : new Date().getTime(),
            sender : UserData,
            receiver : UserData,
        }

        setMessages([...directMessages, NewMessages])
        setInputValue("")
    }
    
    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    
    const handleClick = () => {
        setInputValue("")
    }

    return (
        <FormInputStyle onSubmit={handleSubmite}>
                <Input  onChange={handleInputChange} value={inputValue}/>
                <SendIcon onClick={handleClick} style={{width : "4rem",height : "70%", color : "#C4C4C4"}}/>
        </FormInputStyle>
    )
}

export const Received = ({content, time, avatar} : {content : string, time : string, avatar : string}) => {
    return (
        <MessageReceivedStyle>
            <Avatar sx={{margin : "1rem", height : "6rem", width : "6rem"}} src={avatar}/>
            <TextTimeContainer>
                <ChatContent>{content}</ChatContent>
                <Time>{time.substring(11,16)}</Time>
            </TextTimeContainer>
        </MessageReceivedStyle>
    )
}

export const Sent = ({content, time, avatar} : {content : string, time : string, avatar : string}) => {
    return (
        <MessageReceivedStyle>
            <TextTimeContainer>
                <ChatContentReverse>{content}</ChatContentReverse>
                <TimeReverse>{time.substring(11,16)}</TimeReverse>
            </TextTimeContainer>
            <Avatar sx={{margin : "1rem", height : "6rem", width : "6rem"}} src={avatar}/>
        </MessageReceivedStyle>
    )
}

export const Messages = ({directMessages, setMessages} : {directMessages : ChatType[], setMessages : React.Dispatch<React.SetStateAction<ChatType[]>>}) => {
    const {UserData} = useAppSelector(state => state.counter)
    
    useEffect( () => {
        socket.on("receive_message", (data : ChatType) => {
            console.log(data)
            setMessages([...directMessages, data])
        })
    },[socket])
    
    return (
        <MessagesContainer>
            { directMessages?.map( (msg) => {
                if (msg.sender)
                    if (msg.content && msg.sender?.id !== UserData?.id)
                        return <Received key={msg.id} content={msg.content} time={msg.createdAt} avatar={msg.sender.avatar_url}/>
                    else
                        return <Sent key={msg.id} content={msg.content} time={msg.createdAt} avatar={msg.sender.avatar_url}/>
            })}
        </MessagesContainer>
    )
}

export const Chat = () => {
    const [directMessages, setMessages] = useState(useLoaderData() as ChatType[])
    return (
        <ChatContainer>
            <FormInput directMessages={directMessages} setMessages={setMessages} />
            <Messages directMessages={directMessages} setMessages={setMessages} />
        </ChatContainer>
    )
}