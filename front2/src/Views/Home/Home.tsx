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
import SignIn from '../../Components/SignIn/SignIn';
import { SignInWithKey } from "../../Apis/LoginAPIs/loginApi"

const SignComponentCheck = () => {
	const PopUpSign = useAppSelector(state => state.counter.PopUpSign)
	if (PopUpSign)
		return <SignIn />
	else
		return <></>
}

export default function Home(){
	const PopUpSign = useAppSelector(state => state.counter.PopUpSign)
	const UserData = useAppSelector(state => state.counter.UserData)
	const isUserSigned = useAppSelector(state => state.counter.isUserSigned)
	const dispatch = useAppDispatch()
	
	
	useEffect( () => {
		if (localStorage.getItem("UserKey")){		
			dispatch(SignInWithKey(null))
		}
	},[])

	const Play = () => {
		if (!PopUpSign)	
			dispatch(SignDisplay())
	}

	return (
		<>
			<HomeStyle>
				<Navbar/>
				<HomeSecendPart>
					<PongLogo src={Pingpong}/>
					<PongText>Oldie but Goldie!</PongText>
					<PlayButton onClick={Play}>Play Now</PlayButton>
				</HomeSecendPart>
			</HomeStyle>
			<SignComponentCheck />
		</>
	)
}