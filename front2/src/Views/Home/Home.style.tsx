import styled from "styled-components"
import BackGround from "../../assets/svg/Background.svg"

export const HomeStyle = styled.div`
    height: 100vh;
    background-image: url(${BackGround});
    background-repeat: no-repeat;
    background-size: 100%;
`

export const HomeSecendPart = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 9rem;
    padding: 10% 0;
    gap: 5rem;
`

export const PongLogo = styled.img`
    height: 50%;
    width: 100%;
`

export const PongText = styled.p`
    font-size: 1rem;
    font-family: 'Press Start 2P', cursive;
    color : #C4C4C4;
`

export const PlayButton = styled.div`
    color: #05F2DB;
    font-size: 1.6rem;
    font-family: 'Press Start 2P';
`