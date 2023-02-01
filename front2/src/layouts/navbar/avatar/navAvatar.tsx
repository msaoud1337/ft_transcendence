import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserAvatar } from '../Navbar.style';
import { AvatarOptions } from './navAvatar.Style';
import { useAppDispatch } from '../../../Hooks/Hooks';
import { logOut } from '../../../Store/Slices/counterSlice';

export default function BasicMenu({image} : {image : string | undefined}) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch()
  const open = Boolean(anchorEl);
  
  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(e.currentTarget);
  };
  
  const handleLogout = () => {
    dispatch(logOut(null))
    localStorage.removeItem("UserKey")
    setAnchorEl(null)
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  return (
    <div>
      <UserAvatar src={image} onClick={handleClick}/>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <AvatarOptions>
                Profile
            </AvatarOptions>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <AvatarOptions>
                My account
            </AvatarOptions>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
            <AvatarOptions>
                Logout
            </AvatarOptions>
        </MenuItem>
      </Menu>
    </div>
  );
}