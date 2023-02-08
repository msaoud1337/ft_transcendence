import styled from "styled-components";
import BackgroundSvg from "../../assets/svg/UsersBackground.svg"

export const UsersContainer = styled.div`
    height: 900px;
    display: flex;
    background-color: #0d0c19;
    background-image: url(${BackgroundSvg});
    background-repeat: no-repeat;
    background-size: 100%;
`

export const UserHistoryFriendsSection = styled.div`
    height: 100%;
    width: 40rem;
    padding-top: 42rem;
`

export const UserProfileContainer = styled.div`
    width: 45rem;
    height: 28rem;
    background-color: #16152B;
    display: flex;
    flex-direction: column;
    padding: 5rem 4rem;
    border-radius: 2rem;
    margin-top: 25rem;
    margin-left: 9rem;
    margin-right: 3rem;
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
    color : #C4C4C4;
`

export const DateContainer = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    gap: 5rem;
    align-items: center;
    justify-content: space-between;
`

export const FriendsNbr = styled.p`
    font-size: 0.8rem;
    width: 10rem;
    font-family: "Press Start 2P";
    color : #C4C4C4;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    display: flex;
    align-items: center;
    width: 30%;
`

export const JoiningDate = styled.p`
    font-size: 0.8rem;
    font-family: "Press Start 2P";
    color : #C4C4C4;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    width: 70%;
`

export const ButtonEditProfile = styled.div`
    font-size: 0.8rem;
    height: 4rem;
    width: 60%;
    margin: auto;
`

export const HistorySection = styled.div`
    height: 80%;
    width: 100%;
    /* background-color: beige; */
    display: flex;
    flex-direction: column;
    padding: 0.5rem 2rem;
`

export const PartTilteStyle = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.2rem solid gray;
`

export const SectionTilte = styled.p`
    font-size: 1.2rem;
    font-family: "Press Start 2P";
    color: white;
    `

export const SeeAll = styled.p`
    font-size: 0.6rem;
    font-family: "Press Start 2P";
    text-decoration: underline;
    color: white;
    `

export const HistroryResultStyle = styled.div`
    flex-grow: 1;
    width: 100%;
`

export const HistoryCompStyle = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HistoryImageName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const PlayerImage = styled.img`
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
`

export const HistoryDataComp = styled.div`
    display: flex;
    gap: 1rem;
`
export const PlayerNameHis = styled.p`
    font-size: 1rem;
    font-family: "Press Start 2P";
    `
export const HistoryData = styled.p`
    font-size: 1.3rem;
    font-family: "Press Start 2P";
`

export const EditProfileText = styled.p`
    color: #05F2DB;
    font-size: 1rem;
    font-family: 'Press Start 2P';
`

export const ButtonsStyle = styled.div`
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap : 2rem;
`

export const Parent = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    width: 100vw;
`