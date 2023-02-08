import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

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
            <Avatar sx={{height : "15rem", width : "15rem"}} alt="Remy Sharp" src={avatar} />
        </StyledBadge>
    )
}

