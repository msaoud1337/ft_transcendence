import React from "react";
import { 
    ButtonSignIn,
    GoogleButton,
    LogoSignIn,
    Modal,
    SignInLastText,
    SignInStyle,
    SignUpRedirect,
    TextContainer,
    TextSignIn,
    UserNameInputs
} from "../SignIn/SignIn.style";
import Logo from "../../assets/svg/Logo.svg"
import { SignUpStyle } from "./SignUp.style";

export default function SignUp() {
    return (
        <Modal>
            <SignUpStyle>
                <LogoSignIn src={Logo}/>
                <TextSignIn>Sign Up</TextSignIn>
                <UserNameInputs placeholder="Username"/>
                <UserNameInputs placeholder="Password" type="password"/>
                <UserNameInputs placeholder="Confirm Password" type="password"/>
                <ButtonSignIn>Sign Up</ButtonSignIn>
                <GoogleButton>Sign Un with Google</GoogleButton>
                <TextContainer>
                    <SignInLastText>Already Signed ?</SignInLastText>
                    <SignUpRedirect>Sign In</SignUpRedirect>
                </TextContainer>
            </SignUpStyle>
        </Modal>
    )
}