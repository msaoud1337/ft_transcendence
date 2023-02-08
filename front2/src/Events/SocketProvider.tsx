import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { GetPendingRequest } from "../Apis/LoginAPIs/userDetails";
import { useAppDispatch } from "../Hooks/Hooks";

export const socket = io("http://localhost:3001", {
	auth : { 
		token : localStorage.getItem("UserKey")
	}	 
})
			
export const SocketsProvider = ({children} : {children : React.ReactNode}) => {
	const dispatch = useAppDispatch()
	useEffect( () => {
		socket.on("receive_notification", () => {
			dispatch(GetPendingRequest())
			console.log("received");
		});
	},[socket])
	
	return (
		<>
			{children}
		</>
	)
} 