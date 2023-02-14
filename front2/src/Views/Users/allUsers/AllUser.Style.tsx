import styled from "styled-components";

export const AllUsersContainer = styled.div`
    /* min-height: 100vh; */
    height: 100vh;
    max-width: 100vw;
    display: flex;
    background-color: black;
    overflow: hidden;
`

export const RouteContainer = styled.div`
    height: 100%;
    width: 30%;
    padding-top: 1rem;
    padding-left: 15%;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    gap : 1rem;
`

export const UsersContainer = styled.div`
    min-height: 100vh;
    width: 70%;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap : 1rem;
    border-left: 0.5px solid white;
`

export const CartStyle = styled.div`
    height: 30rem;
    width: 24%;
    padding: 1rem 3rem;
    border: 1px solid white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const UserName = styled.h3`
    width: 100%;
    font-size: 1rem;
    text-align: center;
    color : #C4C4C4;
`