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

export default function Home(){
	return (
		<HomeStyle>
			<Navbar/>
			<HomeSecendPart>
				<PongLogo src={Pingpong}/>
				<PongText>Oldie but Goldie!</PongText>
				<PlayButton>Play Now</PlayButton>
			</HomeSecendPart>
		</HomeStyle>
	)
}