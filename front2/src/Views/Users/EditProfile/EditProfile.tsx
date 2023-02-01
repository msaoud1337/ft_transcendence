import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UsersBackground from "../../../assets/svg/UsersBackground.svg"
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import profile from "../../../assets/svg/profile.svg"
import { UserNameInputs } from '../../Home/SignPages/Sign/SignIn.style';
import { ButtonsStyle } from '../Users.style';
import Button from '@mui/material/Button';
import ImageUploading, { ImageType } from "react-images-uploading";
import { useAppDispatch, useAppSelector } from "../../../Hooks/Hooks";
import { EditProfileUserName } from "../../../Apis/LoginAPIs/userDetails";

const AvatarEdit = () => {
    const dispatch = useAppDispatch()
    const {UserData} = useAppSelector(state => state.counter)
    const [images, setImages] = React.useState<ImageType>([UserData?.avatar_url]);
    let newName : string = ""
    
    const onChange = (
      imageList: ImageType,
      addUpdateIndex: number[] | undefined
    ) => {
      console.log(imageList[0].dataURL, addUpdateIndex);
      setImages(imageList[0].dataURL);
    };

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        newName = e.target.value
    }
    
    const updateProfileData = () => {
        const formData = new FormData()
        dispatch(EditProfileUserName(images))
    }

    return (
        <>
            <ImageUploading
                value={images[0]}
                onChange={onChange}
            >
                {({
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                }) => (
                    <Badge
                        sx={avatarStyle}
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
                                <EditIcon onClick={onImageUpload}/>
                            </SmallAvatar>
                        }
                        >
                        <Avatar sx={avatarStyle} alt="Travis Howard" src={images[0] === UserData?.avatar_url ? images[0] : images} />
                    </Badge>
                    )
                }
            </ImageUploading>
            <UserNameInputs onChange={handleInput} placeholder="Display_name"/>
            <ButtonsStyle>
                <Button onClick={() => setImages([UserData?.avatar_url])} sx={buttonsStyle} variant="outlined"  color="error" >Cancel</Button>
                <Button onClick={updateProfileData} sx={buttonsStyle} variant="contained" color="success">Save</Button>
            </ButtonsStyle>
        </>
    )
}

export function EditModal({open, handleClose} : {open : boolean, handleClose : () => void}) {
    return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <AvatarEdit />
            </Box>
        </Modal>
    </div>
  );
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 646,
    height: 395,
    bgcolor: 'background.paper',
    border: '2px solid #05F2DB',
    boxShadow: 24,
    p: 4,
    backgroundColor : "#16152B",
    backgroundImage : `url(${UsersBackground})`,
    backgroundSize : "800px 216px",
    backgroundRepeat : "no-repeat",
    backgroundPosition : "top",
    paddingTop : "155px",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    gap : "1.5rem",
};

const avatarStyle = {
    height : "115px", 
    width : "115px"
}

const buttonsStyle = {
    height : "3rem",
    width : "10rem",
}

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));