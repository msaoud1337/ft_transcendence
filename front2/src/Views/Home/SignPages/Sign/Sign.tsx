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
    UserNameInputs,
    SignUpStyle,
    ButtonText
} from "./SignIn.style";
import Logo from "../../../../assets/svg/Logo.svg";
import { SignHide, SignUpFalse, SignUpTrue } from "../../../../Store/Slices/counterSlice";
import { useAppDispatch, useAppSelector} from "../../../../Hooks/Hooks";
import { SignInRequest, SignUpRequest } from "../../../../Apis/LoginAPIs/loginApi";
import Button from '@mui/material/Button';

const SignInComp = () => {

    const dispatch = useAppDispatch()

    const UserSignInData = {
        user_name : "",
        password : "",
    }
    
    const SignIn = () => {
        dispatch(SignInRequest(UserSignInData))
        dispatch(SignHide())
    }

    const buttonStyle = {
        height : "3rem",
        width : "25rem",
        backgroundColor : "#0711D9",
        borderRadius : "5px",
        color : "#05F2DB",
    }

    return (
        <SignInStyle onClick={e => e.stopPropagation()}>
            <LogoSignIn src={Logo}/>
            <TextSignIn>Sign In</TextSignIn>
            <UserNameInputs 
                onChange={(e) => {UserSignInData.user_name = e.target.value}} 
                placeholder="Username"
            />
            <UserNameInputs
                placeholder="Password" 
                type="password"
            />
            <Button sx={buttonStyle} onClick={SignIn} >
                <ButtonText>Sign In</ButtonText>
            </Button>
            <GoogleButton>Sign in with Google</GoogleButton>
            <TextContainer>
                <SignInLastText>Dont have an account ?</SignInLastText>
                <SignUpRedirect onClick={() => dispatch(SignUpTrue())}>Sign Up</SignUpRedirect>
            </TextContainer>
        </SignInStyle>
    )
}

const SignUpComp = () =>{

    const dispatch = useAppDispatch()
    const SignUpComfirm = useAppSelector(state => state.counter.SignUpConfirmation)

    let userName: string = ""

    console.log(SignUpComfirm)

    if (SignUpComfirm === "all is good"){
        console.log("new user registred")
        dispatch(SignUpFalse())
    }

    const SignUp = () => {
        dispatch(SignUpRequest({user_name : userName}))
    }

    return (
        <SignUpStyle onClick={e => e.stopPropagation()}>
            <LogoSignIn src={Logo}/>
            <TextSignIn>Sign Up</TextSignIn>
            <UserNameInputs 
                onChange={(e) => {userName = e.target.value}}
                placeholder="Username"/>
            <UserNameInputs placeholder="Password" type="password"/>
            <UserNameInputs placeholder="Confirm Password" type="password"/>
            <ButtonSignIn onClick={SignUp}>Sign Up</ButtonSignIn>
            <GoogleButton>Sign Un with Google</GoogleButton>
            <TextContainer>
                <SignInLastText>Already Signed ?</SignInLastText>
                <SignUpRedirect onClick={() => dispatch(SignUpFalse())}>Sign In</SignUpRedirect>
            </TextContainer>
        </SignUpStyle>
    )
}

export default function SignIn() {
    
	const PopUpSign = useAppSelector(state => state.counter.PopUpSign)
    const SignStats = useAppSelector(state => state.counter.SignUp)
	const dispatch = useAppDispatch()

    const Play = () => {
        if (PopUpSign){
            dispatch(SignHide())
            dispatch(SignUpFalse())
        }
    }

    console.log(SignStats)

    return (
        <Modal onClick={Play}>
                {!SignStats ? <SignInComp /> : <SignUpComp />}
        </Modal>
    )
}

