import styled from "styled-components";

export const ChatPageContainer = styled.div`
    height: 90vh;
    min-height: 90vh;
    width: 100%;
    background-color: #151424;
    display: flex;
`

export const ConversationsStyle = styled.div`
    height: 100%;
    width: 23rem;
    border-right: 1px solid gray;
`

export const ChatStyle = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const ChatRoute = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 5rem;
    border-bottom: 1px solid gray;
    padding-right: 2rem;
`

export const ChatAndConnections = styled.div`
    flex-grow: 1;
    width: 100%;
    display: flex;
`