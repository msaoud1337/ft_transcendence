import styled from "styled-components";


export const ChatContainer = styled.div`
    height: 100%;
    width: 75%;
    border-right: 1px solid gray;
    padding: 2rem;
    display: flex;
    flex-direction: column-reverse;
`


export const FormInputStyle = styled.form`
    height: 4rem;
    width: 100%;
    border-radius: 7px;
    border: solid gray 1px;
    display: flex;
    align-items: center;
    `

export const Input = styled.input`
    padding: 1rem;
    height: 100%;
    flex-grow: 1;
    font-family: 'Press Start 2P', cursive;
    border: #151424;
    color: #C4C4C4;
    background-color: transparent;
    &:focus {
        outline: none !important;
    }
`

export const MessagesContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    max-height: 500px;
    gap: 2rem;
    overflow-y: auto;
        &::-webkit-scrollbar {
            width: 2px;
        }
        &::-webkit-scrollbar-track {
            background: #888;
        }
        &::-webkit-scrollbar-thumb {
            background: #f1f1f1;
        }
`

export const MessageReceivedStyle = styled.div`
    height: 7rem;
    width: 100%;
    display: flex;
    align-items: center;
`


export const TextTimeContainer = styled.div`
    min-height: 100%;
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
`

export const ChatContent = styled.p`
    flex-grow: 1;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-family: 'Press Start 2P', cursive;
    color: #C4C4C4;
    
    `

export const ChatContentReverse = styled.p`
    flex-grow: 1;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-family: 'Press Start 2P', cursive;
    color: #C4C4C4;
    text-align: end;
`
export const Time = styled.h4`
    height: 2rem;
    width: 100%;
    text-align: start;
    font-size: 0.7rem;
    padding-left: 1rem;
    color: #C4C4C4;
    padding-bottom: 1rem;
    font-family: 'Press Start 2P', cursive;
    `

export const TimeReverse = styled.h4`
    height: 2rem;
    width: 100%;
    font-size: 0.7rem;
    padding-right: 1rem;
    color: #C4C4C4;
    padding-bottom: 1rem;
    font-family: 'Press Start 2P', cursive;
    text-align: end;
`