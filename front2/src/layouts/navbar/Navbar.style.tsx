import styled from "styled-components"


export const NavbarStyle = styled.div`
    width: 100%;
    height: 10rem;
    background-color: black;
    padding: 0 9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap : 9rem */
`

export const LogoStyle = styled.img`
    height: 4.4rem;
    width: 15rem;
    /* margin-right: 9rem; */
`

export const StyledRoute = styled.div`
    width: 45%;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* margin-right: 9rem; */
`

export const RouteElement = styled.div`
    font-size: 1.6rem;
`

export const UserName = styled.div`
    font-size: 1.6rem;
`

export const UserAvatar = styled.img`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
`

export const NavbarRightSideContainer = styled.div`
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
`