import React from "react"
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
import SignUp from "../../Components/SignUp/SignUp"

const SignComponentCheck = () => {
	const PopUpSign = useAppSelector(state => state.counter.PopUpSign)
	if (PopUpSign)
		return <SignIn />
	else
		return <></>
}

export default function Home(){
	const PopUpSign = useAppSelector(state => state.counter.PopUpSign)
	const dispatch = useAppDispatch()

	console.log(PopUpSign)

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