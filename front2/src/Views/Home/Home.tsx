import React, { useEffect } from "react"
import Navbar from "../../layouts/navbar/Navbar"
import Pingpong from "../../assets/svg/PingPong.svg"
import { 
	HomeSecendPart,
	HomeStyle, 
	PlayButton, 
	PongLogo, 
	PongText
} from "./Home.style"
import { useAppDispatch, useAppSelector } from "../../Hooks/Hooks"
import { SignDisplay } from "../../Store/Slices/counterSlice"
import SignIn from './SignPages/Sign/Sign';
import { SignInWithKey } from "../../Apis/LoginAPIs/loginApi"
import Button from '@mui/material/Button';
import "@fontsource/roboto"
import { Link } from "react-router-dom"

const SignComponentCheck = () => {

	const PopUpSign = useAppSelector(state => state.counter.PopUpSign)

	if (PopUpSign)
		return <SignIn />
	else
		return <></>
}

const HomeButton = () => {
	const { PopUpSign, UserData }= useAppSelector(state => state.counter)
	const dispatch = useAppDispatch()

	
	const Play = () => {
		if (!PopUpSign && !UserData)
		dispatch(SignDisplay())
	}
	
	if (UserData)
		return (
			<Link to="users" style={{textDecoration : "none"}}>
				<Button sx={style} variant="contained">
					<PlayButton>Play Now</PlayButton>
				</Button>
			</Link>
		)
		else 
		return (
			<Button sx={style} onClick={Play} variant="contained">
				<PlayButton>Sign In</PlayButton> 
			</Button>
		)
	}
	
	export default function Home(){
	const isUserSigned = useAppSelector(state => state.counter.isUserSigned)
	const dispatch = useAppDispatch()
	
	useEffect( () => {
		if (localStorage.getItem("UserKey")){
			dispatch(SignInWithKey())
		}
	},[])
	
	useEffect( () => {
		if (isUserSigned)
		dispatch(SignInWithKey())
	},[isUserSigned])
	
	return (
		<>
			<HomeStyle>
				<Navbar users="false" />
				<HomeSecendPart>
					<PongLogo src={Pingpong}/>
					<PongText>Oldie but Goldie!</PongText>
					<HomeButton />
				</HomeSecendPart>
			</HomeStyle>
			<SignComponentCheck />
		</>
	)
}


const style = {
	height: "5rem",
	width: "20rem",
	borderRadius: "1rem",
	backgroundColor: "#0711D9",
	color: "#05F2DB",
	fontSize: "1.6rem",
}