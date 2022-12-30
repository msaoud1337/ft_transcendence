import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.505);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SignInStyle = styled.div`
    width: 28.5%;
    height: 70%;
    background-color: #16152B;
    border: 0.5rem #0711D9 solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.2rem;
`

export const LogoSignIn = styled.img`
    height: 5rem;
    width: 20rem;
`

export const TextSignIn = styled.div`
    font-size: 1.6rem;
    color: #05F2DB;
    font-family: "Press Start 2P";
`

export const UserNameInputs = styled.input`
    height: 3rem;
    width: 25rem;
    background-color: transparent;
    border: solid 1px gray;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-family: 'Fredoka One', cursive;
    font-size: 1.2rem;
`

export const ButtonSignIn = styled.button`
    height: 3rem;
    width: 25rem;
    background-color: #0711D9;
    color: #05F2DB;
    font-family: 'Fredoka One', cursive;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    `

export const GoogleButton = styled.button`
    height: 3rem;
    width: 25rem;
    background-color: transparent;
    border: solid 1px gray;
    border-radius: 0.5rem;
    font-family: 'Fredoka One', cursive;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    color: #C4C4C4;
`

export const SignInLastText = styled.p`
    font-family: 'Fredoka One', cursive;
    font-size: 1.2rem;
    color: #C4C4C4;
    `

export const SignUpRedirect = styled.div`
    font-family: 'Fredoka One', cursive;
    font-size: 1.2rem;
    color: #05F2DB;
    text-decoration: underline #05F2DB;
    cursor: pointer;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`