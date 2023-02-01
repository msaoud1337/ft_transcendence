import styled from "styled-components";

export const NotifContainer = styled.div`
    height: 6rem;
    width: 30rem;
    border: white  1px solid;
    padding: 1rem;
    display: flex;
    padding: 0.5rem 0.5rem;
`

export const NotifAvatar = styled.img`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
`


export const NotificationText = styled.h5`
    font-size: 0.7rem;
    font-family: 'Press Start 2P', cursive;
    height: 100%;
    color : #C4C4C4;
    text-align: center;
    padding-top: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    p {
        color : red;   
        text-decoration: underline;
        text-transform: uppercase;
    }
`