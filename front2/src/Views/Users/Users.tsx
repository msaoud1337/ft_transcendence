import React from "react";
import { 
    ButtonEditProfile, 
    DateContainer, 
    FriendsNbr, 
    HistoryCompStyle, 
    HistoryData, 
    HistoryDataComp, 
    HistoryImageName, 
    HistorySection, 
    HistroryResultStyle, 
    ImageAndNameContainer, 
    ImageUser, 
    JoiningDate, 
    PartTilteStyle, 
    PlayerImage, 
    PlayerNameHis, 
    SectionTilte, 
    SeeAll, 
    UserHistoryFriendsSection, 
    UserName, 
    UserProfileContainer, 
    UsersContainer,
} from "./Users.style";
import { TitlteTypes } from "../../Types";
import Profile from "../../assets/svg/profile.svg"

const JoineDateAndFriends = () => {
    return (
        <DateContainer>
            <JoiningDate>Joined march 1337</JoiningDate>
            <FriendsNbr>42 Friends</FriendsNbr>
        </DateContainer>
    )
}

const ImageAndName = () => {
    return (
        <ImageAndNameContainer>
            <ImageUser/>
            <UserName>amine saoud</UserName>
        </ImageAndNameContainer>
    )
}

const UserProfilePart = () => {
    return (
        <UserProfileContainer>
            <ImageAndName />
            <JoineDateAndFriends />
            <ButtonEditProfile>Edit Profile</ButtonEditProfile>
        </UserProfileContainer>
    )
}

const PartTilte = ({Name}: TitlteTypes) => {
    return (
        <PartTilteStyle>
            <SectionTilte>{Name}</SectionTilte>
            <SeeAll>See all</SeeAll>
        </PartTilteStyle>
    )
}

const HistoryComp = () => {
    return (
        <HistoryCompStyle>
            <HistoryImageName>
                <PlayerImage src={Profile}></PlayerImage>
                <PlayerNameHis>Player1</PlayerNameHis>
            </HistoryImageName>
                <HistoryDataComp>
                    <HistoryData>8</HistoryData>
                    <HistoryData>_</HistoryData>
                    <HistoryData>2</HistoryData>
                </HistoryDataComp>
            <HistoryImageName>
                <PlayerImage src={Profile}></PlayerImage>
                <PlayerNameHis>Player1</PlayerNameHis>
            </HistoryImageName>
        </HistoryCompStyle>
    )
}

const HistoryResult = () => {
    return (
        <HistroryResultStyle>
            <HistoryComp />
            <HistoryComp />
            <HistoryComp />
        </HistroryResultStyle>
    )
}
const History = () => {
    return (
        <HistorySection>
            <PartTilte Name="Game History"/>
            <HistoryResult />
            <PartTilte Name="Friends"/>
        </HistorySection>
    )
}

const HistoryFriendsContainer = () => {
    return (
        <UserHistoryFriendsSection>
            <History />
            {/* <Friends /> */}
        </UserHistoryFriendsSection>
    )
}

export default function Users() {
    return (
        <UsersContainer>
            <UserProfilePart />
            <HistoryFriendsContainer />
        </UsersContainer>
    )
}
