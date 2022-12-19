import styled from "styled-components";
import BackgroundSvg from "../../assets/svg/UsersBackground.svg"

export const UsersContainer = styled.div`
    height: 900px;
    display: flex;
    background-color: #0d0c19;
    background-image: url(${BackgroundSvg});
    background-repeat: no-repeat;
    background-size: 100%;
    justify-content: space-between;
`

export const UserSection = styled.div`
    height: 50%;
    width: 100%;
`

export const UserProfileContainer = styled.div`
    width: 55rem;
    height: 32rem;
    background-color: #16152B;
    display: flex;
    flex-direction: column;
    padding: 5rem 4rem;
    border-radius: 2rem;
`

export const ImageAndNameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
`

export const ImageUser = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
`

export const UserName = styled.p`
    font-size: 1.2rem;
    font-family: "Press Start 2P";
`

export const DateContainer = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    gap: 5rem;
    align-items: center;
`

export const FriendsNbr = styled.p`
    font-size: 0.8rem;
    font-family: "Press Start 2P";
    `

export const JoiningDate = styled.p`
    font-size: 0.8rem;
    font-family: "Press Start 2P";
    `

export const ButtonEditProfile = styled.button`
    font-size: 0.8rem;
    font-family: "Press Start 2P";
    height: 4rem;
    width: 60%;
    background-color: #0711D9;
    border-radius: 1rem;
    color: #05F2DB;

`