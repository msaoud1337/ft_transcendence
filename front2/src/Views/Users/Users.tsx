import React from "react";
import { 
    ButtonEditProfile, 
    DateContainer, 
    EditProfileText, 
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
import Navbar from "../../layouts/navbar/Navbar";
import GroupIcon from '@mui/icons-material/Group';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Button from '@mui/material/Button';
import { PlayButton } from "../Home/Home.style";
import { EditModal } from "./EditProfile/EditProfile";

const JoineDateAndFriends = () => {
    return (
        <DateContainer>
            <JoiningDate>
                <CelebrationIcon />
                Joined march 1337
            </JoiningDate>
            <FriendsNbr>
                <GroupIcon />
                42 Friends
            </FriendsNbr>
        </DateContainer>
    )
}

const ImageAndName = () => {
    return (
        <ImageAndNameContainer>
            <ImageUser src={Profile}/>
            <UserName>amine saoud</UserName>
        </ImageAndNameContainer>
    )
}

const UserProfilePart = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <UserProfileContainer>
            <ImageAndName />
            <JoineDateAndFriends />
            <ButtonEditProfile>
                <Button onClick={handleOpen} variant="contained" sx={style}>
                    <EditProfileText>
                        Edit Profile
                    </EditProfileText>
                </Button>
            </ButtonEditProfile>
            <EditModal open={open} handleClose={handleClose}/>
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
        </HistorySection>
    )
}

const HistoryFriendsContainer = () => {
    return (
        <UserHistoryFriendsSection>
            <History />
        </UserHistoryFriendsSection>
    )
}

export default function Users() {
    return (
        <>
            <Navbar users="true" />
            <UsersContainer>
                <UserProfilePart />
                <HistoryFriendsContainer />
            </UsersContainer> 
        </>
    )
}

const style = {
	height: "100%",
	width: "100%",
	borderRadius: "1rem",
	backgroundColor: "#0711D9",
	color: "#05F2DB",
	fontSize: "1.6rem",
}