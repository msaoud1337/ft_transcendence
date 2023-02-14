import React, { useEffect } from "react";
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
import GroupIcon from '@mui/icons-material/Group';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Button from '@mui/material/Button';
import { EditModal } from "./EditProfile/EditProfile";
import { useAppDispatch, useAppSelector } from "../../Hooks/Hooks";
import "../../global.css"
import { NavLink } from "react-router-dom";

const JoineDateAndFriends = () => {
    const {UserData} = useAppSelector(state => state.counter)
    const {friends} = useAppSelector(state => state.userSlice)
    return (
        <DateContainer>
            <JoiningDate>
                <CelebrationIcon />
                Joined {UserData?.createdAt.substring(0,10)}
            </JoiningDate>
            <FriendsNbr>
                <GroupIcon />
                friends {friends?.length}
            </FriendsNbr>
        </DateContainer>
    )
}

const ImageAndName = () => {
    const {UserData} = useAppSelector(state => state.counter)
    return (
        <ImageAndNameContainer>
            <ImageUser src={UserData?.avatar_url}/>
            <UserName>{UserData?.user_name}</UserName>
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
            <NavLink to="/all_users">
                <SeeAll>See all</SeeAll>
            </NavLink>
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
            {/* <HistoryComp />
            <HistoryComp />
            <HistoryComp /> */}
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
    const dispatch = useAppDispatch()

    return (
        <>
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