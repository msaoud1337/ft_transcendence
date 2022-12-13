import { 
    NavbarStyle, 
    LogoStyle,
    StyledRoute,
    RouteElement,
    UserName,
    NavbarRightSideContainer,
    UserAvatar
} from "./Navbar.style";
import Avatar from "../../assets/profile.svg"
import Image from "../../assets/Logo.svg"

const NavbarRightSide = () => {
    return (
        <NavbarRightSideContainer>
            <UserName>user_name</UserName>
            <UserAvatar src={Avatar}/>
        </NavbarRightSideContainer>        

    )
}

const Route = () => {
    return (
        <StyledRoute>
            <RouteElement>Home</RouteElement>
            <RouteElement>Channels</RouteElement>
            <RouteElement>Game</RouteElement>
            <RouteElement>Users</RouteElement>
            <RouteElement>About</RouteElement>
        </StyledRoute>
    )
}
    
    
    
export default function Navbar() {
    return (
        <NavbarStyle>
            <LogoStyle src={Image} />
            <Route />
            <NavbarRightSide />
        </NavbarStyle>
    )
}