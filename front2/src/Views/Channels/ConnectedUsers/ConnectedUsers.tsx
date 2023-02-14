import { Avatar, Button } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../Hooks/Hooks"
import { ConnectionsStyle, FriendComponentStyle, UserName, UserNameAndState, UserState } from "./Connection.style"
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { UserDatatypes } from "../../../Types";
import { setSelectedConversation } from "../../../Store/Slices/chatSlice";
import { NavLink } from "react-router-dom";
export const CardAvatar = ({avatar, state} : {avatar : string, state : string}) => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
            },
        },
    }));

    return (
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant={state === "offline" ? undefined : "dot"}
        >
            <Avatar sx={state === "offline" ? {filter: "grayscale(100%)"} : {}} alt="Remy Sharp" src={avatar} />
        </StyledBadge>
    )
}

const Friends = ({friend} : {friend : UserDatatypes}) => {
    const dispatch = useAppDispatch()
    return (
        <FriendComponentStyle>
            <CardAvatar avatar={friend.avatar_url} state={friend.state} />
            <UserNameAndState>
                <UserName>{friend.user_name}</UserName>
                <UserState>{friend.state}</UserState>
            </UserNameAndState>
            <NavLink to={`/chat/${friend.id}`} >
                <Button variant="contained" onClick={() => dispatch(setSelectedConversation(friend.id))}>
                    chat
                </Button>
            </NavLink>
        </FriendComponentStyle>
    )
}

export const ConnectedUsers = () => {

    const { friends } = useAppSelector(state => state.userSlice)

    return (
    <ConnectionsStyle>

            {/* returning Online Users First */}
            {   friends?.filter((item) => {
                    return  item.state !== "offline"
                }).map((friend) => {
                    return  <Friends friend={friend} key={friend.id}/>
                })
            }
            {   friends?.filter((item) => {
                    return  item.state === "offline"
                }).map((friend) => {
                    return  <Friends friend={friend} key={friend.id}/>
                })
            }

        </ConnectionsStyle>
    )
}