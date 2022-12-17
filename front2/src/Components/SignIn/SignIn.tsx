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
} from "./SignIn.style";
import Logo from "../../assets/svg/Logo.svg"

export default function SignIn() {
    return (
        <Modal>
            <SignInStyle>
                <LogoSignIn src={Logo}/>
                <TextSignIn>Sign In</TextSignIn>
                <UserNameInputs placeholder="Username"/>
                <UserNameInputs placeholder="Password" type="password"/>
                <ButtonSignIn>Sign In</ButtonSignIn>
                <GoogleButton>Sign in with Google</GoogleButton>
                <TextContainer>
                    <SignInLastText>Dont have an account ?</SignInLastText>
                    <SignUpRedirect>Sign Up</SignUpRedirect>
                </TextContainer>
            </SignInStyle>
        </Modal>
    )
}

