import React from "react";
import { ButtonEditProfile, DateContainer, FriendsNbr, ImageAndNameContainer, ImageUser, JoiningDate, UserName, UserProfileContainer, UsersContainer, UserSection } from "./Users.style";

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

export default function Users() {
    return (
        <UsersContainer>
            <UserProfilePart />
            <UserSection />
        </UsersContainer>
    )
}