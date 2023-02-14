import styled from "styled-components";

export const ConnectionsStyle = styled.div`
    flex-grow: 1;
    height: 100%;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
`

export const FriendComponentStyle = styled.div`
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    border: 0.5px gray solid;
    justify-content: space-between;
`

export const UserNameAndState = styled.div`
    padding: 0.7rem 0rem;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const UserName = styled.h4`
    font-size: 1.6rem;
    color : blue;
`

export const UserState = styled.p`
    font-size: 1.2rem;
    color : gray
`