import * as React from 'react';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NotifAvatar, NotifContainer, NotificationText } from './Notification.style';
import profile from "../../../assets/svg/profile.svg"
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAppDispatch, useAppSelector } from '../../../Hooks/Hooks';
import { GetPendingRequest } from '../../../Apis/LoginAPIs/userDetails';
import { UserDatatypes } from '../../../Types';
import { CancelFriendRequest, AccepteFriendRequest } from '../../../Apis/LoginAPIs/userDetails';

const NotifText = ({name} : { name : string }) => {
    return (
        <NotificationText>
            friend request from <p>{name}</p>
        </NotificationText>
    ) 
}

const Notification = ({data} : { data : UserDatatypes }) => {
    const dispatch = useAppDispatch()
    const cancelRequest = () => {
        dispatch(CancelFriendRequest(data.id))
    }
    const accepteRequestFriend = () => {
        dispatch(AccepteFriendRequest(data.id))
    }

    return (
        <>
            <NotifContainer>
                <NotifAvatar src={data.avatar_url ? data.avatar_url : profile}/>
                <NotifText name={data.user_name}/>
                <div style={{paddingTop : "1rem", paddingLeft : "1rem"}}>
                    <CheckCircleIcon onClick={accepteRequestFriend} fontSize="large" color='success'/>
                    <CancelIcon onClick={cancelRequest} fontSize="large" color='error'/>
                </div>
            </NotifContainer>
        </>
    )
}

export default function Notifications() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { friendRequest } = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()

    const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        if (friendRequest?.length !== 0)
            setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect( () => {
        dispatch(GetPendingRequest())
    },[])
    
    return (
        <div>
            <Badge onClick={handleClick} color="secondary" badgeContent={friendRequest?.length} max={10}>
                <NotificationsIcon style={{height : "30px", width : "30px",color : "#C4C4C4"}}></NotificationsIcon>
            </Badge>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                { friendRequest && friendRequest.map((data : UserDatatypes) => {
                    return (
                        <Notification data={data} key={data.id}/>
                    )
                })}
            </Menu>
        </div>
  );
}